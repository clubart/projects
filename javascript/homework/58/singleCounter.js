var app = app || {};

 app = (function(){
    'use strict';
    let count = 0;

     app.counter = function(){
        count++;
    };
    app.getCurrentCount = function(){
        return count;
    };

return app;
}(app || {}));