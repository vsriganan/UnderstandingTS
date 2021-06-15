"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPoint = void 0;
var QPoint = (function () {
    function QPoint(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    QPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    ;
    Object.defineProperty(QPoint.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value should be greater than 0.');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return QPoint;
}());
exports.QPoint = QPoint;
//# sourceMappingURL=PointClass.js.map