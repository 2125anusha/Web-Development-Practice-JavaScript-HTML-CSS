let input=prompt("Enter some text: ");
let inputChars=input.length;
const maxChars=140;
let remainChars=140-inputChars;
console.log(` Maximum characters allowed: ${maxChars} \n Characters in text entered: ${inputChars} \n Remaining characters that can be allowed: ${remainChars}`);