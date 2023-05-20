// class car{
//     constructor(name, speed)
//     {
//         this.name = name;
//         this.speed = speed;
//         console.log(`${name} speed is ${speed} km/h`);
//     }
    
// };
// const obj = new car("BMW",'120');


const car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
car.prototype.accelater = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new car("BMW", 120);
const mercedes = new car("Mecedes", 95);

bmw.accelater();
bmw.accelater();
bmw.brake();
bmw.accelater();
mercedes.accelater();
mercedes.accelater();
mercedes.brake();
mercedes.accelater();
mercedes.accelater();
mercedes.accelater();
mercedes.accelater();
mercedes.accelater();