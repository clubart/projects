const daysUtils = (function () {
    'use strict';
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'shabbos'];
    return {
        getDayName: function (index) {
            if (index <= days.length + 1) {
                return days[index - 1];
            }
            return 'no such day';
        },
        getDayNumber: function (name) {
            for (let i = 0; i < days.length; i++) {
                if (days[i] === name.toLowerCase()) {
                    return i + 1;
                }
            }
            return 'No such day';
        }
    };
}());

console.log(daysUtils.getDayName(5));
console.log(daysUtils.getDayNumber('friDay'));