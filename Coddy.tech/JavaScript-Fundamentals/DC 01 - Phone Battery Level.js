
let level = parseInt(prompt("Enter the Battery Level: "));

if (level === 100) {
    console.log("Battery: Full");
} 
else if (level >= 50) {
    console.log("Battery: Good");
} 
else if (level >= 15) {
    console.log("Battery: Low");
} 
else if (level > 0) {
    console.log("Battery: Critical");
} 
else {
    console.log("Battery: Empty");
}