"use strict";
var PPoint = (function () {
    function PPoint(xx, yy) {
        this.x = 1;
        this.y = 2;
        if (xx != undefined) {
            this.x = xx;
        }
        if (yy != undefined) {
            this.y = yy;
        }
    }
    PPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    ;
    return PPoint;
}());
var firstPoint = new PPoint();
firstPoint.y = 5;
firstPoint.draw();
var secondPoint = new PPoint();
secondPoint.draw();
var thirdPoint = new PPoint(10, 20);
thirdPoint.draw();
//# sourceMappingURL=classes-accessmodifiers.js.map