"use strict";
function addVals(n1, n2, showResult, showPhrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(showPhrase + result);
    }
    else {
        return result;
    }
}
var value1;
value1 = 5;
var value2 = 2.8;
var shdPrintResult = true;
var printPhrase = 'The result is: ';
addVals(value1, value2, shdPrintResult, printPhrase);
//# sourceMappingURL=basics.js.map