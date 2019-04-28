// function Request() {
//     var self = this;

//     this.bigData = new Array(1e6).join('*');

//     this.send = function (data) {
//         console.log(data);
//     }

//     this.onError = function () {
//         self.send("Sorry, we got a trouble...");
//     };
// }

// setInterval(function () {
//     var request = new Request();
//     console.log(process.memoryUsage().heapUsed);
// }, 200);

var EventEmitter = require('events').EventEmitter;

var db = new EventEmitter();

function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function (data) {
        console.log(data);
    }

    this.onError = function () {
        self.send("Sorry, we got a trouble...");
    };

    function onData(info) {
        self.send(info);
    }

    this.end = function () {
        db.removeListener('data', onData)
    }

    db.on('data', onData);
}

setInterval(function () {
    var request = new Request();
    //...
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);