const testUserName = 'max';
let age = 30;
console.log(testUserName);
console.log(age);

const button = document.querySelector('button');

function clickHandler(e: string){
    console.log('CLicked!' + e);
}
button?.addEventListener('click', clickHandler.bind(null, 'thanks'))