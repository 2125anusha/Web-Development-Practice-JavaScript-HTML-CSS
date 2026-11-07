function findMax(num1,num2,num3){
  maxNumber=Math.max(num1,num2,num3);
  return maxNumber;
}
let result=findMax(3,5,2);
console.log(result);


```
solution provided:

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
```