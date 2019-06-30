window.Myapp = window.Myapp || {};

window.Myapp.stringCase = (function (theModule) {
    'use strict';
    theModule.stringCaseInsensitiveEquals = (string1, string2) => string1.toUpperCase() === string2.toUpperCase();
    return theModule;
}(window.Myapp.stringCase || {}));

console.log(window.Myapp.stringCase.stringCaseInsensitiveEquals('apple', 'hello'));