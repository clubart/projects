(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now going at ${speed}`);
    };

    Vehicle.prototype.print = function () {
        console.log(`color: ${this.color} speed: ${this.speed}`);
    };

    function Plane(color) {
        Vehicle.call(this, color);

    }
    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now Flying at ${speed}`);
    };

    const vehicle1 = new Vehicle('blue');
    vehicle1.go(65);
    vehicle1.print();

    const plane1 = new Plane('red');
    plane1.go(365);
    plane1.print();
    console.log(plane1);
    console.log(vehicle1);

}());