# Instalar e executar o RabbitMQ

Passos para instalação manual: https://www.rabbitmq.com/download.html

### Executar com docker

`docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management`

### /producer

Publica eventos no tópico `pedidos`

### /consumer-1

Consome eventos do tópico `pedidos`

Faz ack manual de eventos. Ver `Message acknowledgment` em [
Work Queues](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html):

```javascript
channel.consume(queue, function(msg) {
        ...
    }, {
        noAck: false
    });
```

Consome somente 1 evento por vez. Ver `Fair dispatch` em [
Work Queues](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html):

channel.prefetch(1);


