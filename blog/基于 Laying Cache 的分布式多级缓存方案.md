---
title: 基于 Laying Cache 的分布式多级缓存方案
authors: [xiongchun]
tags: [服务端开发,盘古开发框架,缓存]
date: 2019-12-15
hide_table_of_contents: false
slug: pangu-dev-framework-laying-cache
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[盘古开发框架](https://github.com/xiongchun/pangu-framework) 基于 [Laying Cache](https://github.com/xiaolyuh/layering-cache)，提供支持分布式环境的多级缓存功能。使用 Caffeine 作为一级本地缓存，Redis 作为二级集中式缓存。支持缓存信息监控统计、支持缓存过期时间在注解上直接配置、支持缓存的自动刷新、缓存 Key 支持 SpEL 表达式、支持无感禁用一级缓存或二级缓存。

<!--truncate-->

:::info 扩展：什么是缓存穿透、缓存雪崩和缓存击穿？
**缓存穿透**（cache penetration）是用户访问的数据既不在缓存当中，也不在数据库中。这就导致每次请求都会到底层数据库进行查询，缓存也失去了意义。当高并发或有人利用不存在的Key频繁攻击时，数据库的压力骤增，甚至崩溃，这就是缓存穿透问题。  
**缓存雪崩**（Cache Avalanche）当大量的热点KEY同时失效或者缓存服务故障导致请求全部转发到数据库，从而导致数据库压力骤增，甚至宕机。从而形成一系列的连锁反应，造成系统崩溃等情况。  
**缓存击穿**（Cache Breakdown）如果有单个热点key，在不停的扛着大并发，在这个key失效的瞬间，持续的大并发请求就会击破缓存，直接请求到数据库，好像蛮力击穿一样。
:::

盘古分布式多级缓存组件通过缓存空值或默认值来解决缓存穿透问题、通过判断即将过期时发起异步加载缓存的方式来解决缓存击穿和雪崩问题。

## 安装相关盘古模块

<Tabs>
<TabItem value="parent" label="盘古 Parent">

```jsx
<parent>
	<groupId>com.gitee.pulanos.pangu</groupId>
	<artifactId>pangu-parent</artifactId>
	<version>latest.version.xxx</version>
	<relativePath/>
</parent>
```
</TabItem>
<TabItem value="dependency1" label="基础模块">

```jsx
<dependency>
    <groupId>com.gitee.pulanos.pangu</groupId>
    <artifactId>pangu-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>
<TabItem value="dependency2" label="缓存模块">

```jsx
<dependency>
	<groupId>com.gitee.pulanos.pangu</groupId>
	<artifactId>pangu-cache-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>
</Tabs>

## 本地配置

> 为便于理解，本文基于本地配置的方式编写。若改为标准的 Nacos 配置中心模式，请参阅：[配置中心](https://xiongchun.github.io/pangu-framework/docs/advanced-guide/nacos-config-center) 章节。

<Tabs defaultValue="application-dev">
<TabItem value="application" label="application.properties">

```jsx
spring.profiles.active=${spring.profiles.active:dev}
```
</TabItem>
<TabItem value="application-dev" label="application-dev.properties">

```jsx
spring.application.name=pangu-examples-cache-layering

# layering-cache 多级缓存
layering-cache.stats=false
# redis单机
layering-cache.redis.database=1
layering-cache.redis.host=localhost
layering-cache.redis.port=6379
layering-cache.redis.password=
# redis集群
#layering-cache.redis.password=
#layering-cache.redis.cluster=127.0.0.1:6379,127.0.0.1:6378
layering-cache.redis.serializer=com.github.xiaolyuh.redis.serializer.JacksonRedisSerializer

logging.level.root=INFO
logging.level.com.gitee.pulanos.pangu=INFO
```
</TabItem>
</Tabs>

### 关键配置项说明

|<div style={{width:'120px'}}>配置项</div> | 配置说明
--- | --- 
layering-cache.stats | 缓存监控统计开关，缺省true
layering-cache.redis.serializer | Redis序列化方式

## 基于注解声明
直接在需要缓存的方法上加上 `@Cacheable`、`@CacheEvict`、`@CachePut` 注解。（ `@FirstCache`、`@SecondaryCache` 为注解配置项，不能单独使用）

### @FirstCache
一级缓存配置项。

名称 | 默认值 | 说明
--- | --- | ---
initialCapacity | 10 | 缓存初始 Size
maximumSize | 5000 | 缓存最大 Size
expireTime | 9 | 缓存有效时间
timeUnit | TimeUnit.MINUTES | 时间单位，默认分钟
expireMode | ExpireMode.WRITE | 缓存失效模式，ExpireMode.WRITE：最后一次写入后到期失效，ExpireMode.ACCESS：最后一次访问后到期失效

### @SecondaryCache
二级缓存配置项。

名称 | 默认值 | 说明
--- | --- | ---
expireTime | 5 | 缓存有效时间
preloadTime | 1 | 缓存主动在失效前强制刷新缓存的时间，建议是 expireTime * 0.2
timeUnit | TimeUnit.HOURS | 时间单位，默认小时
forceRefresh | false | 是否强制刷新（直接执行被缓存方法）
magnification | 1 | 非空值和 null 值之间的时间倍率，默认是 1。如 expireTime=60 秒，magnification=10，那么当缓存空值时，空值的缓存过期时间是 60/10=6 秒。

### @Cacheable
表示用的方法的结果是可以被缓存的，当该方法被调用时先检查缓存是否命中，如果没有命中再调用被缓存的方法，并将其返回值放到缓存中。

名称 | 默认值 | 说明
--- | --- | ---
cacheNames | 空字符串数组 | 缓存名称
key | 空字符串 | 缓存 key，支持 SpEL 表达式
depict | 空字符串	 | 缓存描述（在缓存统计页面会用到）
enableFirstCache | true | 是否启用一级缓存
firstCache | |  一级缓存配置
secondaryCache | | 二级缓存配置

```jsx title="@Cacheable 范例代码"
@Cacheable(cacheNames = "user", key = "#userId",
		firstCache = @FirstCache(expireTime = 5),
		secondaryCache = @SecondaryCache(expireTime = 10))
public UserVO getUser(Long userId) {
	log.info("执行AnnotationBasedDemoService.getUser()");
	// 从DB或其它资源渠道获取数据
	UserVO userVO = new UserVO();
	userVO.setId(userId);
	userVO.setName("钱学森");
	return userVO;
}
```


### @CachePut
将数据放到缓存中，新增缓存。

名称 | 默认值 | 说明
--- | --- | ---
cacheNames | 空字符串数组 | 缓存名称
key | 空字符串 | 缓存 key，支持 SpEL表达式
depict | 空字符串	 | 缓存描述（在缓存统计页面会用到）
enableFirstCache | true | 是否启用一级缓存
firstCache |  | 一级缓存配置
secondaryCache |  | 二级缓存配置

```jsx title="@CachePut 范例代码"
@CachePut(cacheNames = "user", key = "#userVO.id",
		firstCache = @FirstCache(expireTime = 10),
		secondaryCache = @SecondaryCache(expireTime = 30))
public UserVO saveUser(UserVO userVO) {
	log.info("执行AnnotationBasedDemoService.saveUser()");
	return userVO;
}
```

### @CacheEvict
删除缓存。

名称 | 默认值 | 说明
--- | --- | ---
value | 空字符串数组 | 缓存名称，cacheNames 的别名
cacheNames | 空字符串数组	缓存名称
key | 空字符串 | 缓存 key，支持 SpEL 表达式
allEntries | false | 是否删除缓存中所有数据，默认情况下是只删除关联 key 的缓存数据，当该参数设置成 true 时 key 参数将无效

```jsx title="@CacheEvict 范例代码"
@CacheEvict(cacheNames = "user", key = "#userId")
public void delUser(Long userId) {
	log.info("执行AnnotationBasedDemoService.delUser()");
}

@CacheEvict(cacheNames = "user", allEntries = true)
public void delAllUsers() {
	log.info("执行AnnotationBasedDemoService.delAllUsers()");
}
```

## 基于 API 编程
可以直接使用 Laying Cahce 提供的 API 进行硬编码操作两级缓存，但不建议使用。这里就不做详细讲解了，可以在参考范例的 `ApiBasedDemoService` 类中找到相关的代码。

## 启动入口
需要 `@EnableLayeringCache` 注解的加持。如下代码所示。

```jsx
@EnableLayeringCache
@SpringBootApplication
public class LayeringCachePanguApplication {
	public static void main(String[] args) {
		PanGuApplicationBuilder.init(LayeringCachePanguApplication.class).run(args);
	}
}
```

<details>
  <summary><b>快速 QA：</b>可以禁用一级缓存，只使用二级缓存吗？</summary>
  <div>
  必须可以。设置 enableFirstCache = false 即可。
  </div>
</details>

<details>
  <summary><b>快速 QA：</b>可以禁用二级缓存，只使用一级缓存吗？</summary>
  <div>
  可以。设置二级缓存 expireTime 为 0 即可。
  </div>
</details>

<details>
  <summary><b>快速 QA：</b>我可以用 Spring Cache 的 RedisTemplate API 吗？</summary>
  <div>
  可以。Laying Cache 和 Spring Cache 相互隔离的，你只要在配置文件加入 Spring Cache 的配置，就可以注入 RedisTemplate 直接使用了。可以单独使用，也可以和 Laying Cache 混合使用。具体用法可以参考范例：pangu-examples-cache-single。
  </div>
</details>

## 本文相关范例源码
- [pangu-examples-cache-layering](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-empty-web)：两级缓存（本地缓存 + Redis 集中缓存）范例
- [pangu-examples-cache-single](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-cache-single)：Spring Cache 一级缓存 API（ RedisTemplate ）范例