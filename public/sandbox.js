"use strict";
console.log("test");
console.log("Hello World");
const plus = (a, b) => {
    return a + b;
};
const result = plus(56, 67);
console.log(result);
const pai = (a) => {
    return a * Math.PI;
};
const result2 = pai(22);
console.log(result2);
let dan = 20;
const carDrive = () => {
    if (dan >= 18) {
        console.log("Dan can drive the car");
    }
    else {
        console.log("Dan must be 18 to drive the car");
    }
};
const result3 = carDrive();
console.log(result3);
const point = 51;
const culPoint = () => {
    if (point >= 90) {
        console.log("A");
    }
    else if (point >= 70) {
        console.log("B");
    }
    else if (point >= 60) {
        console.log("C");
    }
    else if (point >= 50) {
        console.log("D");
    }
    else {
        console.log("You have fail");
    }
};
const result4 = culPoint();
console.log(result4);
