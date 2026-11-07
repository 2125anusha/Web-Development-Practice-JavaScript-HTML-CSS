// my logic may be wrong even if output correct, to be updated later 

let base=parseInt(prompt("Enter the base number: "));
let exponent= parseInt(prompt("Enter the exponent: "));
let result=base;
if(exponent==0){
    result=1;
}
else{
  for(let i=1;i<exponent;i++){ 
   result*=base;
  }
}
console.log(`${base}^${exponent} = ${result}`);
