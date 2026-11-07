let rainfall = parseInt(prompt("Enter rainfall (millimeters): "));
let rainCondition = "unset";

if(rainfall<1){
    rainCondition="Dry";
}
else if(rainfall>=1 && rainfall<=10){
    rainCondition="Light Rain";
}
else if(rainfall>=11 && rainfall<=50){
    rainCondition="Moderate Rain";
}
else{
    rainCondition="Heavy Rain";
}

console.log(rainCondition);