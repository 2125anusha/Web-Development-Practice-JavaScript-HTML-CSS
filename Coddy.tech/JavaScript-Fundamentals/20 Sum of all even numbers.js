let num=prompt("Enter a number to add even numbers within 1 and this number: ");
let sumOfEvens = n => {
    let result=0;
    for(let i=2;i<=n;i+=2){
    result+=i;
    }
    return result;
    
}
console.log(sumOfEvens(num));