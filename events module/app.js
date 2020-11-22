var event = require('events');
var util = require('util');

// Usage of util.inherits() is discouraged.
// Please use the ES6 class and extends keywords to get language level inheritance support.
// Note that the two styles are semantically incompatible.
//
// var Person = function(name,age = 18){
//     this.name = name;
//     this.age = age;
// };
//
// util.inherits(Person, event.EventEmitter);

class Person extends event.EventEmitter{
    constructor(name,age = 18){
        super();
        this.name = name;
        this.age = age;
    }
}

// Use the "extends" keyword to inherit all methods from another class.

// Use the "super" method to call the parent's constructor function.
//super(<parent's_args>)

var ted = new Person('Ted Mosby', 21);
var lily = new Person('Lily Aldrin');
var marsh = new Person('Marshall Eriksen', 20);

var people = [ted, marsh, lily];

people.forEach(function(p){
    p.on('speak', function(msg){
        console.log(p.name + " said, \"" + msg + "\"");
    });
});

ted.emit('speak', 'Because sometimes even if you know how something’s gonna end, that doesn’t mean you can’t enjoy the ride.');
lily.emit('speak', 'Definitions are important.' );
marsh.emit('speak','I\'m cuddly. Deal with it.');