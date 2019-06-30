const interestCalculator = (function () {
    'use strict';
    let rate;
    return {
        setRate: function (interestRrate) {
            rate = interestRrate;
           // return interestRrate;
        },
        setYears: function(amtyears){
            return amtyears;
        },
        calculateInterest: function(year, principle){
            return (year*rate*principle)/100;
        }
    };
})();
console.log(interestCalculator.setRate(0.05));
console.log(interestCalculator.setYears(30));
console.log(interestCalculator.calculateInterest(interestCalculator.setYears(30), interestCalculator.setRate(0.05), 500000));
console.log(interestCalculator.calculateInterest(0.05, 30, 5000000));