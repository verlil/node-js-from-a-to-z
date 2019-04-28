var db = require('db');
var User = require('./user');
require('./person');
var log = require('./logger')(module);

db.connect();
// This module is initialized once in an absolute path, 
// later this module is stored in the cache, so we do not need 
// to initialize it in each file. After initialization of this 
// module in one place, all modules that have connected it to 
// themselves refer to the same part of the cache memory.


function run() {
    var vasya = new User('Vasya');
    var petya = new User('Petya');
    var sasha = new Person('Sasha');

    vasya.hello(petya);
    sasha.hello(vasya);
}


if (module.parent) {
    console.log('somebody required me, so I will just export my functions');
    exports.run = run;
} else {
    run();
}