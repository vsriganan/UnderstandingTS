"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var insertAtBeginning = function (arrayVal, seedVal) {
    var newArray = __spreadArray([seedVal], arrayVal);
    return newArray;
};
var insertNumbers = insertAtBeginning([1, 2, 3], 0);
var insertStrings = insertAtBeginning(['one', 'two', 'three'], 'zero');
//# sourceMappingURL=generics.js.map