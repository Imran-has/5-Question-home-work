"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countvowels(str) {
    let vowels = `aeoiuAEIOU`;
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
let mystring = "Hello imran hassan ,how are you!";
console.log(countvowels(mystring));
