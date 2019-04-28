var db = require('db');
var log = require('../logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log('hello', who);
    console.log(`${db.getPhrase('hello')} ${who.name}, ${db.getPhrase('my_name_is')} ${this.name}`);
}

console.log('user.js is required');

console.log(module);

// this.User = User;
// exports.User = User;
// module.exports.User = User; // these three lines are identical

module.exports = User;
// exports = User; // will not work