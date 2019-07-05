(function () {
    'use strict';
    for (let i = 0; i < 10; i++) {
        app.counter();
    }
    console.log('single counter is at ', app.getCurrentCount());

    const counter1 = app.createCounter();
    for (let i = 0; i < 5; i++) {
        counter1.counter();
    }

    const counter2 = app.createCounter();
    for (let i = 0; i < 15; i++) {
        counter2.counter();
    }
    console.log('counter1 is at ', counter1.getCurrentCount());
    console.log('counter2 is at ', counter2.getCurrentCount());
}());