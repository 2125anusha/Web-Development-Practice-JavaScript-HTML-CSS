console.log("Bill Split Calculator");
let billAmount = parseFloat(prompt("Enter the bill amount(Rupees): ₹"));
let tipPercentage = parseFloat(prompt("Enter the tip percent(without typing %): "));
let numPeople = parseInt(prompt("Between how many people should the bill be split? ")); 
const Rs = '₹'; 

// Calculating the total amount including Tip
const tipAmount = tipPercentage/100;
const total = billAmount+(billAmount*tipAmount);
console.log(`Total (including tip): ${Rs}${total}`);

// Splitting Bill between the people
const splitBill = total/numPeople;
console.log(`Each person pays: ${Rs}${splitBill}`);