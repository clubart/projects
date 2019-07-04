(function () {
    'use strict';
    function map(array, callback) {
        const results = [];

        for (let i = 0; i < array.length; i++) {
            results.push(callback(array[i]));
        }
        return results;
    }

    const numArray = [2, 4, 6];

    //console.log(map(numArray, doubleTheNumber));
    console.log('new array', map(numArray, number => number *= 2));
    console.log('old array', numArray);
}());