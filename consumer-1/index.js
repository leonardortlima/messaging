#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    
    var queue = 'pedidos';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.prefetch(1);

    channel.consume(queue, function(msg) {
        
        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(() => {
            console.log(" [x] Done");
            channel.ack(msg);
        }, 2000);
        
    }, {
        noAck: false
    });
  });
});