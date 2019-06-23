'use strict';

// every
function ourEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

function uppercase(letter) {
    return letter === letter.toUpperCase();
}

let letters = ['a', 'B', 'c'];

console.log('all are uppercase:', ourEvery(letters, uppercase));
console.log('all are lowercase', ourEvery(letters, letter => letter !== letter.toUpperCase()));
console.log('all are uppercase:', letters.every(uppercase));
console.log('all are lowercase', letters.every(letter => letter !== letter.toUpperCase()));

// some
function ourSome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

function notUppercaseSome(letter) {
    return letter === letter.toUpperCase();
}

console.log('some are uppercase:', ourSome(letters, notUppercaseSome));
console.log('some are lowercase:', ourSome(letters, letter => letter !== letter.toUpperCase()));
console.log('some are uppercase:', letters.some(notUppercaseSome));
console.log('some are lowercase:', letters.some(letter => letter !== letter.toUpperCase()));

/////   3
function findUppercase(arr, callback, action) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            action(arr[i]);
        }
    }
}

function Uppercase(letter) {
    return letter === letter.toUpperCase();
}

function uppercaseLetter(letter) {
    console.log('uppercase letter', letter);
}

findUppercase(letters, Uppercase, uppercaseLetter);
