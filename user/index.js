var phrases = require('./ru');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(`${phrases.hello} ${who.name}, ${phrases.my_name_is} ${this.name}`);
}

console.log('user.js is required');

exports.User = User; // exportable variable

