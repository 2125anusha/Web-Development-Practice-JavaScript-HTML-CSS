let age = parseInt(prompt("Enter an age: ")); 
let result;
if(age>=10){
    if(age<13){
        let adult_input = prompt("Is there an adult? Type 'true' or 'false': ");
        let has_adult = adult_input.toLowerCase() === "true";
        if(!has_adult){
            result="Sorry, you need an adult with you";
        }
        else{
        result="You can enter with adult supervision!";
        }
    }
    else{
        result="You can enter by yourself!"
    }
}
else{
    result="Sorry, you are too young";
}
console.log(result);