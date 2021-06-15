"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log('Result : ' + result.toString());
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (val) {
    console.log(val);
});
addAndHandle(12, 11, printResult);
//# sourceMappingURL=functions.js.map