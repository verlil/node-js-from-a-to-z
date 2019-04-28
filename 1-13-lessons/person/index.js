function Person(name) {
    this.name = name;
}

Person.prototype.hello = function (who) {
    console.log('Hello ' + who.name + ' I am ' + this.name);
}

console.log('person.js is required');

global.Person = Person; // global variable