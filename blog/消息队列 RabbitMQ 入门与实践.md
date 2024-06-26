---
title: 消息队列 RabbitMQ 入门与实践
authors: [xiongchun]
tags: [服务端开发,盘古开发框架,消息队列]
date: 2018-11-29
hide_table_of_contents: false
slug: rabbitmq-quick-start-and-best-practice
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[盘古开发框架](https://github.com/xiongchun/pangu-framework) 缺省使用的消息队列中间件是 [RabbitMQ](https://www.rabbitmq.com/)。消息队列在分布式系统的异步通信、服务解耦、消峰填谷、缓存同步等应用场景下有广泛的使用。

<!--truncate-->

## 安装相关盘古模块

<Tabs defaultValue="dependency2">
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
<TabItem value="dependency2" label="消息队列模块">

```jsx
<dependency>
	<groupId>com.gitee.pulanos.pangu</groupId>
	<artifactId>pangu-rabbitmq-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>
</Tabs>

## 队列规划
:::info 建议
建议提前规划队列结构模型，而不是通过客户端 API 动态创建消息交换机和绑定队列。
:::
根据应用场景和业务类型先规划设计出队列结构模型，然后分别将队列相关信息分配给生产侧和消费侧开发人员。本教程使用的队列模型如下图所示。

<img width="580"
  src={require('/resources/doc/14-pangu-framework-queue.png').default}
  alt="队列规划" />

### 图示说明
上图所示虚拟机、交换主机、队列、路由类型、路由键等为 RabbitMQ 中间件的概念。本文对其做如下简要描述，详细信息请查阅 [RabbitMQ](https://www.rabbitmq.com/) 相关文档。

- **虚拟主机（Virtual Host）**  
一个资源管理概念，用作逻辑隔离。不同 Vhost 之间的 Exchange 和 Queue 相互隔离，互不干扰。
- **交换机（Exchange）**  
生产者将消息发送到 Exchange 中，Exchange 根据消息的属性或内容将消息路由到一个或多个 Queue 中（或者丢弃），Consumer 从 Queue 中拉取消息进行消费。
- **路由类型**  
交换机的关键属性。包括：Direct、Fanout、Topic。
  - **Direct**：该类型的交换机会把消息路由到与路由键完全匹配的 Queue 中。
  - **Fanout**：该类型的交换机会将消息路由到所有与其绑定的 Queue 中。
  - **Topic**：该类型的交换机会支持多条件匹配和模糊匹配将消息路由至与其绑定的 Queue 中。（本文不讲解，一般情况使用 Direct、Fanout 即可）
- **路由键**  
当交换机路由类型为 Direct 或 Topic 时，交换机绑定队列时需要设置路由键，给交换机发送消息时需要带上这个参数，交换机根据路由类型和路由键匹配规则将消息投递到合适的队列等待消费。（Direct 是精确匹配、Topic 是模糊匹配、Fanout 不需要路由匹配）

## 创建队列
本文以腾讯云 TDMQ (RabbitMQ 版本) 为例。TDMQ RabbitMQ 版是一款腾讯研发的消息队列服务，支持 AMQP 0-9-1 协议，完全兼容开源 RabbitMQ 的各个组件与概念。因此，本教程也适用原生开源 RabbitMQ 中间件和兼容开源 RabbitMQ 的其它云端消息服务。

在控制台创建队列及相关组件如下图所示。
<Tabs defaultValue="Vhost">
<TabItem value="Vhost" label="虚拟主机">

![虚拟主机](/resources/doc/17-pangu-framework-queue.png)
</TabItem>

<TabItem value="Exchange" label="交换机">

![交换机](/resources/doc/18-pangu-framework-queue.png)
</TabItem>

<TabItem value="Queue" label="队列">

![队列](/resources/doc/19-pangu-framework-queue.png)
</TabItem>

<TabItem value="Routing" label="路由关系">

![路由关系](/resources/doc/20-pangu-framework-queue.png)
</TabItem>
</Tabs>

## 消息生产者
### 本地配置

> 为便于理解，本文基于本地配置的方式编写。若改为标准的 Nacos 配置中心模式，请参阅：[配置中心](https://xiongchun.github.io/pangu-framework/docs/advanced-guide/nacos-config-center) 章节。

<Tabs defaultValue="application-dev">
<TabItem value="application" label="application.properties">

```jsx
spring.profiles.active=${spring.profiles.active:dev}
```
</TabItem>
<TabItem value="application-dev" label="application-dev.properties">

```jsx
spring.application.name=pangu-examples-mq-rabbitmq-sender

spring.rabbitmq.host=jzaep3orxb2b.public.tencenttdmq.com
spring.rabbitmq.port=5672
spring.rabbitmq.username=admin
spring.rabbitmq.password=123456
spring.rabbitmq.virtual-host=vhost-pangu

logging.level.root=INFO
logging.level.com.gitee.pulanos.pangu=INFO
```
</TabItem>
</Tabs>

### 消息发送代码
```jsx
@Slf4j
@Component
public class SendService {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    /**
     * 发送消息到Fanout交换机
     * @return
     */
    public void sendMsg1FanoutBased(){
        String msg = "我是云南大熊(Fanout), " + DateUtil.now();
        // 参数说明：参数1：交换机名称。  参数2：routing key  参数3：消息内容
        rabbitTemplate.convertAndSend("exchange-fanout", "", msg);
        log.info("消息发送成功。{}", msg);
    }

    /**
     * 发送消息到Direct交换机
     * @return
     */
    public void sendMsg1DirectBased(String routingKey){
        String msg = "我是云南大熊(Direct), " + DateUtil.now();
        // 参数说明：参数1：交换机名称。  参数2：routing key  参数3：消息内容
        rabbitTemplate.convertAndSend("exchange-direct", routingKey, msg);
        log.info("消息发送成功。{}", msg);
    }
}
```

:::tip
发送消息到 Fanout 交换机时，路由键参数为空；发送消息到 Direct 交换机时候路由键根据上图（队列规划）传参。（如：Key-1、Key-2）。
:::

## 消息消费者
### 本地配置

> 为便于理解，本文基于本地配置的方式编写。若改为标准的 Nacos 配置中心模式，请参阅：[配置中心](https://xiongchun.github.io/pangu-framework/docs/advanced-guide/nacos-config-center) 章节。

<Tabs defaultValue="application-dev-2">
<TabItem value="application-2" label="application.properties">

```jsx
spring.profiles.active=${spring.profiles.active:dev}
```
</TabItem>
<TabItem value="application-dev-2" label="application-dev.properties">

```jsx
spring.application.name=pangu-examples-mq-rabbitmq-receiver

spring.rabbitmq.host=jzaep3orxb2b.public.tencenttdmq.com
spring.rabbitmq.port=5672
spring.rabbitmq.username=admin
spring.rabbitmq.password=123456
spring.rabbitmq.virtual-host=vhost-pangu
# 开启ACK NONE|MANUAL|AUTO(default)
spring.rabbitmq.listener.simple.acknowledge-mode=manual

logging.level.root=INFO
logging.level.com.gitee.pulanos.pangu=INFO
```
</TabItem>
</Tabs>

#### 关键配置项说明
- 消息确认模式配置项（`spring.rabbitmq.listener.simple.acknowledge-mode`）  
  - NONE：无消息确认支持。消息一旦从队列取出即被永久删除。
  - AUTO：自动确认（缺省配置）。消费代码抛出异常则重新将消息放入队列，无异常则抛出则确认消费。
  - MANUAL：手工确认。如下代码根据业务逻辑进行手工确认消息。
  
### 消息监听代码

```jsx
@Component
public class Queue1Listener {

    @RabbitHandler
    @RabbitListener(queues = "queue-1")
    public void receiveMsg(Message message, Channel channel) throws IOException {
        long deliveryTag = message.getMessageProperties().getDeliveryTag();
        try {
            log.info("接收消息(queue-1)：{}", new String(message.getBody()));
            // do business...
            channel.basicAck(deliveryTag, false);
        } catch (Exception e) {
            log.error("消费出错了", e);
            channel.basicNack(deliveryTag, true, true);
        }
    }
}
```
如上为 `queue-1` 的监听代码，其余类似。如果 ACK 消息确认模式为自动模式则消费代码不需要 `try` 结构。

## 测试

### 消费者：启动消费监听程序
```jsx
@SpringBootApplication
public class RabbitmqReceiverApplication {
    public static void main(String[] args) {
        PanGuApplicationBuilder.init(RabbitmqReceiverApplication.class).run(args);
    }
}
```

### 生产者：执行测试用例发送消息

```jsx
/**
 * 发送消息交换机
 */
@Test
public void sendMsg() {
	//发送消息到Fanout交换机
	sendService.sendMsg1FanoutBased();
	//发送消息到Direct交换机
	sendService.sendMsg1DirectBased("key-1");
	//发送消息到Direct交换机
	sendService.sendMsg1DirectBased("key-2");
}
```

### 测试结果截图

#### 生产者
![生产者](/resources/doc/15-pangu-framework-queue.png)

#### 消费者
![消费者](/resources/doc/16-pangu-framework-queue.png)

## 本文相关范例源码
- [pangu-examples-mq-rabbitmq-sender](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-mq-rabbitmq-sender)：消息队列范例（生产者）
- [pangu-examples-mq-rabbitmq-receiver](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-mq-rabbitmq-receiver)：消息队列范例（消费者）
