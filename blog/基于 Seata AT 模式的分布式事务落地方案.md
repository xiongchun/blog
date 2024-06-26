---
title: 基于 Seata AT 模式的分布式事务落地方案
authors: [xiongchun]
tags: [服务端开发,盘古开发框架]
date: 2023-2-25
hide_table_of_contents: false
slug: pangu-dev-framework-distributed-transaction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[盘古开发框架](https://github.com/xiongchun/pangu-framework) 集成了事务中间件 [Seata](https://seata.io/en-us/index.html) 来提供分布式事务管理功能。

<!--truncate-->

## 事务概念
数据库事务需要满足 ACID（原子性、一致性、隔离性、持久性）四个特性。
- **原子性**：指事务作为一个整体来执行，要么全都执行，要么全不执行。
- **一致性**：指事务应确保数据从一个一致的状态转变为另一个一致的状态。
- **隔离性**：指多个事务并发执行时，一个事务的执行不应影响其他事务的执行。
- **持久性**：指已提交事务修改的数据会被持久保存。

在单一数据节点中，事务仅限于对单一数据库资源的访问控制，称之为本地事务。在基于 Spring 的开发中，我们一般使用 `@Transactional` 注解的声明式事务来管理。

## 分布式事务概念
由于数据库的拆分或分布式架构（微服务）不可避免的带来了分布式事务的问题。如下为当前针对分布式事务的工程实践和处理方式。
- **基于业务逻辑和应用场景最小化分布式事务边界**  
言外之意就是说应该在设计阶段尽可能规避没必要的分布式事务场景。
- **基于 XA 的强一致性事务**  
XA模式是传统的强一致性分布式事务解决方案，性能较低且锁资源竞争突出。在实际业务中使用较少，本文不做更多讨论。
- **追求最终一致性的柔性事务**  
柔性事务通过放宽对强一致性要求，而是通过反向补偿来达到最终一致性，同时换取系统吞吐量的提升和缓解锁资源竞争。目前，Seata 框架提供了多种事务管理模式来支持柔性事务的落地实现。（详见后续章节）

<details>
  <summary><b>快速 QA：</b>在单体架构的应用中也会有分布式事务吗？</summary>
  <div>
在常规情况下，我们在一个进程中操作一个数据库，这属于本地事务。但是，如果在一个进程中操作多个数据库，或者在多个进程中操作一个或多个数据库，就产生了分布式事务。可见，分布式事务并非微服务架构的产物，在单体应用中由于数据库的拆分也一样面临分布式事务的问题。
  </div>
</details>

## Seata 分布式事务框架
[Seata](https://seata.io/en-us/index.html) 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务，为用户打造一站式的分布式解决方案。

### Seata 专业术语
- **事务协调者 TC** ( Transaction Coordinator )  
维护全局和分支事务的状态，驱动全局事务提交或回滚。

- **事务管理器 TM** ( Transaction Manager )  
定义全局事务的范围，开始全局事务、提交或回滚全局事务。

- **资源管理器 RM** ( Resource Manager )  
管理分支事务处理的资源，与TC交谈以注册分支事务和报告分支事务的状态并驱动分支事务提交或回滚。

:::tip
其中，TC 是 Seata 服务端，需要独立部署。TM、RM 是嵌入应用侧的 Seata 客户端，通过动态代理后的 `DataSource` 和 `@GlobalTransactional` 注解实现。
:::

### Seata 分布式事务模型
一个分布式的全局事务，整体是『两阶段提交』的模型。如下图所示。
<img width="800"
  src={require('/resources/doc/21-pangu-framework-transaction.png').default}
  alt="虚拟业务场景设计" />

Seata 为用户提供了 AT、TCC、SAGA 和 XA 四种事务模式。如下所述。

### AT 模式
AT（Automatic Transaction Mode） 模式下，Seata 会代理数据源，在执行业务 SQL 的时候解析 SQL 并生成必要的回滚日志到 `undo_log` 表，如果需要回滚事务，则根据混滚日志自动生成补偿操作。
- 一阶段 prepare 行为：在本地事务中，一并提交业务数据更新和自动生成相应回滚日志记录。
- 二阶段 commit 行为：成功结束，自动异步批量清理回滚日志。
- 二阶段 rollback 行为：通过回滚日志，自动生成补偿操作，完成数据回滚。

### TCC 模式
TCC （Manual Transaction Mode） 模式也可以简单的认为是 MT 模式，即手动模式。TCC 模式的作用范围在应用层，依赖用户自行实现的3个方法「try()、confirm()、cancel()」。本质上是实现针对某种业务逻辑的正向和反向方法，成本较大。
- 一阶段 prepare 行为：调用**自定义**的 prepare 逻辑。
- 二阶段 commit 行为：调用**自定义**的 commit 逻辑。
- 二阶段 rollback 行为：调用**自定义**的 rollback 逻辑。

### 其它模式
本文不再对 Seata 提供的 SAGA 和 XA 事务模式进行描述。

:::caution Seata 事务和 XA 事务对比
本质上，Seata 的3大事务模式（ AT、TCC、SAGA ）都是补偿型的。事务处理机制构建在框架自身或业务应用中。事务资源（数据库等）本身对分布式事务是无感知的。而在 XA 模式下，是有感知的，相应事务资源需要实现对 XA 协议的支持，以 XA 协议的机制来管理分支事务。
:::

:::info 建议
目前，我们认为 Seata 框架的 AT 模式在并发性能、易用性、成熟度等方面达到了一个很好的平衡。因此，在盘古开发分布式事务场景下，我们将 AT 模式作为默认方案，把 TCC 模式作为补充方案。
:::

## 虚拟业务场景设计
为了能直观的模拟分布式事务，我们特设计如下用户购买商品的虚拟业务场景。整个业务逻辑由如下3个微服务提供支持。
- **仓储服务**：对给定的商品扣除仓储数量。
- **订单服务**：根据采购需求创建订单。
- **帐户服务**：从用户帐户中扣除余额。

虚拟业务调用结构图如下所示。

<img width="600"
  src={require('/resources/doc/22-pangu-framework-transaction.png').default}
  alt="虚拟业务场景设计" />

<Tabs>
<TabItem value="order" label="订单服务接口定义">

``` jsx
public interface OrderService {
    /**
     * 创建订单
	 * @param buyDto
     */
    void createOrder(BuyDto buyDto);
}
```
</TabItem>
<TabItem value="account" label="账户服务接口定义">

```jsx
public interface AccountService {
    /**
     * 扣减账户余额
     * @param buyDto
     */
    void decreaseAccount(BuyDto buyDto);
}
```
</TabItem>
<TabItem value="stock" label="库存服务接口定义">

```jsx
public interface StockService {
    /**
     * 扣减库存
     * @param buyDto
     */
    void decreaseStock(BuyDto buyDto);
}
```
</TabItem>
</Tabs>

## 编程实战（AT 模式）

如下为在盘古框架下基于 Seata 框架 AT 模式的编程实战。分别创建如下几个微服务模块。
- pangu-examples-seata-at-api：服务接口包
- pangu-examples-seata-at-order：订单微服务
- pangu-examples-seata-at-account：账户微服务
- pangu-examples-seata-at-stock：库存微服务
- pangu-examples-seata-at-main：商品购买业务模块

### 初始化数据库环境
>在真实环境中，订单服务、账户服务、库存服务有可能是分别对应不同的三个数据库。但本文范例为了简便，将使用同一个数据库。但订单、账户、库存分属不通的微服务模块，使用不通的数据源对象，来达到模拟分布式事务测试效果。

Seata 的 AT 模式依赖回滚日志完成业务反向补偿，因此每个业务库中都需要增加一个 `undo_log` 回滚日志表。

<Tabs>
<TabItem value="undo_log" label="回滚日志表 DDL">

``` jsx
CREATE TABLE `undo_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `branch_id` bigint(20) NOT NULL,
  `xid` varchar(100) NOT NULL,
  `context` varchar(128) NOT NULL,
  `rollback_info` longblob NOT NULL,
  `log_status` int(11) NOT NULL,
  `log_created` datetime NOT NULL,
  `log_modified` datetime NOT NULL,
  `ext` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```
</TabItem>
<TabItem value="order" label="订单表 DDL">

```jsx
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `commodity_code` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT '0',
  `money` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```
</TabItem>
<TabItem value="account" label="账户表 DDL">

```jsx
CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `money` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `account` (`id`, `user_id`, `money`) VALUES (1, 'U001', 1000);
```
</TabItem>

<TabItem value="stock" label="库存表 DDL">

```jsx
CREATE TABLE `stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commodity_code` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `commodity_code` (`commodity_code`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `stock` (`id`, `commodity_code`, `count`) VALUES (1, 'C001', 100);
```
</TabItem>
</Tabs>

### 安装相关盘古模块

<Tabs defaultValue="dependency4">
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
<TabItem value="dependency2" label="JDBC 模块">

```jsx
<dependency>
	<groupId>com.gitee.pulanos.pangu</groupId>
	<artifactId>pangu-jdbc-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>

<TabItem value="dependency3" label="Dubbo 模块">

```jsx
<dependency>
    <groupId>com.gitee.pulanos.pangu</groupId>
    <artifactId>pangu-dubbo-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>
<TabItem value="dependency4" label="Seata 事务模块">

```jsx
<dependency>
	<groupId>com.gitee.pulanos.pangu</groupId>
	<artifactId>pangu-seata-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>
</Tabs>

### 本地配置

> 为便于理解，本文基于本地配置的方式编写。若改为标准的 Nacos 配置中心模式，请参阅：[配置中心](https://xiongchun.github.io/pangu-framework/docs/advanced-guide/nacos-config-center) 章节。

如下配置以 `pangu-examples-seata-at-order` 模块为例，其它模块类似。
<Tabs>
<TabItem value="application" label="application.properties">

```jsx
spring.profiles.active=${spring.profiles.active:dev}
```
</TabItem>
<TabItem value="application-dev" label="application-dev.properties">

```jsx
spring.application.name=pangu-examples-seata-at-order

dubbo.protocol.name=dubbo
#dubbo.protocol.port=-1
dubbo.protocol.port=20882
dubbo.consumer.timeout=5000
dubbo.registry.address=nacos://${nacos.server-addr}?namespace=${nacos.namespace}
dubbo.consumer.check=false

seata.enabled=true
seata.service.disable-global-transaction=false
seata.tx-service-group=pangu-test-group
seata.service.vgroup-mapping.pangu-test-group=seata-server
seata.service.grouplist.seata-server=127.0.0.1:8091
seata.config.type=file
seata.registry.type=file

spring.datasource.type=com.zaxxer.hikari.HikariDataSource
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/pangu-examples?useUnicode=true&characterEncoding=utf-8&autoReconnect=true&failOverReadOnly=false&allowMultiQueries=true&useSSL=false&rewriteBatchedStatements=true
spring.datasource.username=root
spring.datasource.password=root123456
mybatis-plus.mapperLocations=classpath*:/mapper/**/*.xml
mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
pangu.jdbc.db-type=mysql

logging.level.root=INFO
logging.level.com.gitee.pulanos.pangu=INFO
```
</TabItem>
</Tabs>

#### 关键配置项说明
- seata.service.grouplist.seata-server  
Seata Server （事务协调者 TC ）的通讯地址。

### 主要业务逻辑

<Tabs>
<TabItem value="main-impl" label="购买商品业务代码">

```jsx
@Component
public class MainBizService {

    @Reference(version = "1.0.0", group = "pangu-examples-seata-at-account")
    private AccountService accountService;
    @Reference(version = "1.0.0", group = "pangu-examples-seata-at-order")
    private OrderService orderService;
    @Reference(version = "1.0.0", group = "pangu-examples-seata-at-stock")
    private StockService stockService;

    //此注解开启全局事务管理器
    @GlobalTransactional 
    public void buyItems(BuyDto buyDto){
        orderService.createOrder(buyDto);
        accountService.decreaseAccount(buyDto);
        stockService.decreaseStock(buyDto);
    }

}
```
</TabItem>
<TabItem value="order-impl" label="订单服务接口实现">

``` jsx
@Service(version = "1.0.0", group = "pangu-examples-seata-at-order")
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderMapper orderMapper;

    @Override
    @Transactional(rollbackFor = RuntimeException.class)
    public void createOrder(BuyDto buyDto) {
        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setUserId(buyDto.getUserId());
        orderEntity.setCommodityCode(buyDto.getCommodityCode());
        orderEntity.setCount(buyDto.getCount());
        orderEntity.setMoney(buyDto.getMoney());
        orderMapper.insert(orderEntity);
    }

}
```
</TabItem>
<TabItem value="account-impl" label="账户服务接口实现">

```jsx
@Service(version = "1.0.0", group = "pangu-examples-seata-at-account")
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    @Override
    @Transactional(rollbackFor = RuntimeException.class)
    public void decreaseAccount(BuyDto buyDto) {
        AccountEntity accountEntity = accountMapper.selectOne(Wrappers.<AccountEntity>lambdaQuery().eq(AccountEntity::getUserId, buyDto.getUserId()));
        LambdaUpdateWrapper<AccountEntity> updateWrapper = Wrappers.lambdaUpdate();
        updateWrapper.set(AccountEntity::getMoney, accountEntity.getMoney() - buyDto.getCount() * buyDto.getMoney());
        updateWrapper.eq(AccountEntity::getUserId, buyDto.getUserId());
        accountMapper.update(null, updateWrapper);
    }

}
```
</TabItem>
<TabItem value="stock-impl" label="库存服务接口实现">

```jsx
@Service(version = "1.0.0", group = "pangu-examples-seata-at-stock")
public class StockServiceImpl implements StockService {

    @Autowired
    private StockMapper stockMapper;

    @Override
    @Transactional(rollbackFor = RuntimeException.class)
    public void decreaseStock(BuyDto buyDto) {
        StockEntity stockEntity = stockMapper.selectOne(Wrappers.<StockEntity>lambdaQuery().eq(StockEntity::getCommodityCode, buyDto.getCommodityCode()));
        Assert.notNull(stockEntity, "没有查询到商品{}的库存信息。", buyDto.getCommodityCode());
        LambdaUpdateWrapper<StockEntity> updateWrapper = Wrappers.lambdaUpdate();
        Assert.isTrue(stockEntity.getCount() >= buyDto.getCount(), "库存不够，下单失败");
        updateWrapper.set(StockEntity::getCount, stockEntity.getCount() - buyDto.getCount());
        updateWrapper.eq(StockEntity::getCommodityCode, buyDto.getCommodityCode());
        stockMapper.update(null, updateWrapper);
    }
}
```
</TabItem>
</Tabs>

## 测试

### 启动 Seata 服务端（ TC ）
可通过官网下载 Seata 服务端，通过如下脚本启动。
```jsx
sh seata-server.sh -p 8091
```

### 启动微服务
分别启动订单服务、账户服务、库存服务。需追加如下启动脚本参数。
```jsx
-Dnacos.server-addr=10.155.46.45:8888 -Dnacos.namespace=pangu-dev
```

### 执行测试用例

#### 模拟提交
模拟业务成功的正常逻辑，分支事务提交、全局事务提交。
```jsx
@Test
public void buyItems() {
	BuyDto buyDto = new BuyDto();
	buyDto.setCount(1);
	buyDto.setMoney(10);
	buyDto.setCommodityCode("C001");
	buyDto.setUserId("U001");
	mainBizService.buyItems(buyDto);
}
```

![事务成功1](/resources/doc/23-pangu-framework-transaction.png)
![事务成功2](/resources/doc/24-pangu-framework-transaction.png)

#### 模拟回滚
模拟业务失败的异常逻辑，分支事务回滚、全局事务回滚。
```jsx
@Test
public void buyItems() {
	BuyDto buyDto = new BuyDto();
	// !!! 此参数会导致爆库存不足的异常，导致库存服务减库存失败
	buyDto.setCount(101);
	buyDto.setMoney(10);
	buyDto.setCommodityCode("C001");
	buyDto.setUserId("U001");
	mainBizService.buyItems(buyDto);
}
```

![事务失败1](/resources/doc/25-pangu-framework-transaction.png)
![事务失败2](/resources/doc/26-pangu-framework-transaction.png)

## 本文相关范例源码
- [pangu-examples-seata-at-api](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-seata-at)：服务接口包
- [pangu-examples-seata-at-order](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-seata-at)：订单微服务
- [pangu-examples-seata-at-account](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-seata-at)：账户微服务
- [pangu-examples-seata-at-stock](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-seata-at)：库存微服务
- [pangu-examples-seata-at-main](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-seata-at)：商品购买业务模块