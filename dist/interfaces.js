"use strict";
var max;
max = {
    firstName: 'Max',
    age: 30,
    greet: function () {
        console.log('Hello!');
    }
};
var Instructor = (function () {
    function Instructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    ;
    Instructor.prototype.greet = function () {
        console.log('Hello from Implemented class!');
    };
    return Instructor;
}());
//# sourceMappingURL=interfaces.js.map