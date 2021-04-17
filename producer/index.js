#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    console.log('connection success');
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        console.log('channel success');
        
        var queue = 'pedidos';

        channel.assertQueue(queue, {
            durable: false
        });

        setInterval(() => {

            var msg = {
                data: new Date().toISOString(),
                nome: "hello",
                servicos: [
                    {
                        nome: "a"
                    },
                    {
                        nome: "b"
                    },
                ]
            };
    
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
            console.log(" [x] Sent %s", msg);

        }, 100);
        
    });

});