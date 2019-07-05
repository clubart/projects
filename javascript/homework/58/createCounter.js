var app = app || {};
app = (function () {
    'use strict';
    let numOfCounters = 0;
    app.createCounter = function () {
        numOfCounters++;
        console.log('number of counters', numOfCounters);
        let count = 0;
        return {
            counter: function () {
                count++;
            },
            getCurrentCount: function () {
                return count;
            },
            getNumOfCounters: function () {
                console.log(numOfCounters);
            }
        };
    };
    return app;

}(app || {}));