let user_number = parseInt(prompt("Enter a number: ")); 
let result=1;

for (let i=1;i<=user_number;i++){
    result*=i;
}
console.log(`The factorial of ${user_number} is: ${result}`);