var util = require('util');


function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';


var phrases = {
    'Hello1': 'Привет',
    'world': 'мир'
}


function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError('There is no such phrase ' + name);
    }

    return phrases[name];
}

function makePage(url) {
    if (url !== 'index.html') {
        throw new HttpError(404, 'There is no such page');
    }

    return util.format('%s %s!', getPhrase('Hello'), getPhrase('world'));
}

try {
    var page = makePage('index.html1');
    console.log(page);
} catch (error) {
    if (error instanceof HttpError) {
        console.log(`Error ${error.name}, message: "${error.message}", stack: ${error.stack}`);
    };

    if (error instanceof PhraseError) {
        console.log(`Error ${error.name}, message: "${error.message}", stack: ${error.stack}`);
    };
}
