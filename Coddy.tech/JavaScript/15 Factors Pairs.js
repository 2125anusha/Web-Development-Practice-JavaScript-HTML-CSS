let n = parseInt(prompt("Enter a number to find its factors: ")); 
for(let i=1;i<=n;i++){
  if(n%i===0){
    console.log(`${i} ${n/i}`);
  }
}
