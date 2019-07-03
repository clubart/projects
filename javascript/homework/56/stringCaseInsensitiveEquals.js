var Myapp = Myapp || {};

Myapp.stringCase = (function (theModule) {
    'use strict';
    theModule.stringCaseInsensitiveEquals = (string1, string2) => string1.toUpperCase() === string2.toUpperCase();
    return theModule;
}(Myapp.stringCase || {}));

console.log(Myapp.stringCase.stringCaseInsensitiveEquals('apple', 'hello'));