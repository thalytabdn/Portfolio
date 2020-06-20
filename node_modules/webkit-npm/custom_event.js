/* -- Custom events module -- */
var EventEmitter = require('events').EventEmitter;

var myEvent = new EventEmitter();

myEvent.emit('test', 'event message');

myEvent.on('test', function(message){
    console.log(message);
});

console.log('custom_event is loaded');