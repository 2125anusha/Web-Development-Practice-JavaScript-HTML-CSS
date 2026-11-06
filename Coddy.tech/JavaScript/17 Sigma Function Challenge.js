function sigma(n) {
    let result=0;
    for(let i=1;i<=n;i++){
        result+=i;
    }
    return result;
}
let result=sigma(5);
console.log(result);
