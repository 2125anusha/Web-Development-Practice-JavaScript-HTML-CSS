let n1 = parseInt(prompt("Enter first number: "));
let n2 = parseInt(prompt("Enter second number: "));
let operator = prompt("Enter one of the operators + - / * : ");
let result = 0;

if (operator == '+'){
    result=n1+n2;
}
else if(operator == '-'){
    result=n1-n2;
}
else if(operator == '/'){
    result=n1/n2;
}
else if(operator == '*'){
    result=n1*n2;
}

console.log(`result = ${result}`);