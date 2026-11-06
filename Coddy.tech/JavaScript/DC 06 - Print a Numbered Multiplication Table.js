let number = parseInt(prompt("Enter a number: ")); 
let rows=parseInt(prompt("Enter number of rows: ")); 

for (let i=1;i<=rows;i++){
  let product=number * i;
  console.log(`${number} x ${i} = ${product}`);
}
