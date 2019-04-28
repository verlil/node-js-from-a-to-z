var util = require('util');

var obj = {
    a: 5,
    b: 6,
    test: function () {
        return 123;
    },
    inspect: function () {
        return 456;
    }
}

var obj2 = {
    a: 5,
    b: 6,
    test: function () {
        return 123;
    },
    test2: function () {
        return 456;
    }
}

obj.self = obj;
obj2.self = obj2;

console.log(util.inspect(obj)); // ????
console.log(util.inspect(obj2)); // ????



// parent
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(this.name + ' is walking.');
}

// child
function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function () {
    console.log(this.name + ' is jumping.');
}

// usage
var rabbit = new Rabbit('Our rabbit');
rabbit.jump();
rabbit.walk();

