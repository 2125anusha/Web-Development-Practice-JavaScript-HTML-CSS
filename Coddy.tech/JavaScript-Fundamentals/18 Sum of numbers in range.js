let num1=parseInt(prompt("Enter the starting range number: "));
let num2=parseInt(prompt("Enter the ending range number: "));
function sumRange(start,end){
  let total=0;
  for(let i=start;i<=end;i++){
    total+=i;
  }
  return `The sum of numbers from ${start} to ${end} is ${total}.`;
}
let result=sumRange(num1,num2);
console.log(result);
