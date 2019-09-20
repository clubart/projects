(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`now going at ${speed}`);
        }

        print() {
            console.log(`color: ${this.color} speed: ${this.speed}`);
        }
    }

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`now FLYING at ${speed}`);
        }
    }

    const vehicle1 = new Vehicle('blue');
    vehicle1.go(65);
    vehicle1.print();

    const plane1 = new Plane('red');
    plane1.go(365);
    plane1.print();
    console.log(plane1);
    console.log(vehicle1);
}());