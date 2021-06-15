"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
var combineAgeText = combine('30', '26', 'as-number');
console.log(combineAgeText);
var combineNames = combine('Max', 'Anna', 'as-string');
console.log(combineNames);
//# sourceMappingURL=union-aliases.js.map