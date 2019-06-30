window.Myapp = window.Myapp || {};

window.Myapp.daysUtils = (function (theModule) {
    'use strict';
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'shabbos'];
    theModule.getDayName = function (index) {
        if (index <= days.length + 1) {
            return days[index - 1];
        }
        return 'no such day';
    };
    theModule.getDayNumber = function (name) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === name.toLowerCase()) {
                return i + 1;
            }
        }
        return 'No such day';
    };
    return theModule;
}(window.Myapp.daysUtils || {}));

console.log(window.Myapp.daysUtils.getDayName(5));
console.log(window.Myapp.daysUtils.getDayNumber('friDay'));