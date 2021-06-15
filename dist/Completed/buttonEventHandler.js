"use strict";
var testUserName = 'max';
var age = 30;
console.log(testUserName);
console.log(age);
var button = document.querySelector('button');
function clickHandler(e) {
    console.log('CLicked!' + e);
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', clickHandler.bind(null, 'thanks'));
//# sourceMappingURL=buttonEventHandler.js.map