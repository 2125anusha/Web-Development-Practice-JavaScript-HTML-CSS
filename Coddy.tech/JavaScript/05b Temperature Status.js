let temperature = parseInt(prompt("Enter a temperature(celsius): "));
let message = ""; 

temperature=25
if (temperature>30){
    message="Too hot!";
}
else if(temperature<10){
    message="Too cold!"
}
else if(temperature>=10 && temperature<=30){
    message="Just right!"
}
 
console.log(message); 