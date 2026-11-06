let n = parseInt(prompt("Enter how many times: ")); 
function sum(){
  let result=0;
  for(let i=1;i<=10000;i++){
    result+=i;
  }
  console.log(result)
}
for(let times=1;times<=n;times++){
  sum();
}
