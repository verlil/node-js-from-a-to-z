var user = require('./user');
require('./person');

var vasya = new user.User('Vasya');
var petya = new user.User('Petya');
var sasha = new Person('Sasha');

vasya.hello(petya);
sasha.hello(vasya);
