/* module example */
var sayHello = function() {
    console.log('Hello!');
}

var sayGoodbye = function() {
    console.log('Goodbye!');
}

exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;