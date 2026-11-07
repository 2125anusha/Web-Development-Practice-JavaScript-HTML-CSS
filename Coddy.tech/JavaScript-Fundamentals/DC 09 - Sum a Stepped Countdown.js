let start = parseInt(prompt("Enter start number: "));
let step = parseInt(prompt("Enter step number: "));
let result=0;

function countdownTotal(start, step) {
  for(let i=start;i>0;i-=step){
    result+=i;
  }
  return result;
}
console.log(countdownTotal(start, step))
