let wind = parseInt(prompt("Enter the wind speed(mph): "));
let condition = "unset";

if(wind<8){
    condition="Calm";
}
else if(wind>=8 && wind<=31){
    condition="Breeze";
}
else if(wind>=32 && wind<=63){
    condition="Gale";
}
else{
    condition="Storm"
}

console.log(`condition = ${condition}`);