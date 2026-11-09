let n = prompt("Enter a valid whole number from 1 to 50: ");

if(n>0 && n<=50){
  for(let i=1;i<=n;i+=2){
    console.log(i);
  }
}
else{
  console.log("Enter a valid whole number from 1 to 50!");
}