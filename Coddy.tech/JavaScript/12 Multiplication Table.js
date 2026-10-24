let user_input=parseInt(prompt("Enter a number from 1 for its Multiplication Table: "));

if (user_input >=1){
  for (let i=1; i<=10;i++){
    let result= i*user_input;
    console.log(`${user_input} x ${i} = ${result}`);
  }
}
else{
  console.log(`${user_input} is not a valid number for the Multiplication Table.`)
}
