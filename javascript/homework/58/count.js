(function () {
    'use strict';
    for (let i = 0; i < 10; i++) {
        window.app.counter();
    }
    console.log('single counter is at ', window.app.getCurrentCount());

    const counter1 = window.app.createCounter();
    for (let i = 0; i < 5; i++) {
        counter1.counter();
    }

    const counter2 = window.app.createCounter();
    for (let i = 0; i < 15; i++) {
        counter2.counter();
    }
    console.log('counter1 is at ', counter1.getCurrentCount());
    console.log('counter2 is at ', counter2.getCurrentCount());
}());