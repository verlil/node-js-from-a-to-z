// var log = require('logger')(module);

module.exports = function (module) {

    return function () {
        if (arguments.length === 2) {
            console.log(module.filename + ' called function "' + arguments[0] + '" with arguments ' + JSON.stringify(arguments[1]));
        } else {
            var args = [module.filename, ...arguments];
            console.log.apply(console, args);
        }
    };
}