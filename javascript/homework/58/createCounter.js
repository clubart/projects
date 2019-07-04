var app = app || {};
app = (function () {
    'use strict';


    app.createCounter = function () {
        let count = 0;
        return {
            counter: function () {
                count++;
            },
            getCurrentCount: function () {
                return count;
            }
        };
    };
    return app;

}(app || {}));