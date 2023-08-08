
function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function named() {
        console.log('I do nothing');
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('I\'m anonymous');
    };
}