// Program that helps manage the workshop's final sale day.

const squareFootage = parseInt(prompt("Enter Workshop's Square Footage: "));
const leaseYear = parseInt(prompt("Enter the year the lease expires: "));     
const parkingHours = parseInt(prompt("Enter the total parking hours used: "));  

// Calculate maximum occupancy by dividing square footage by 10 (10 square feet per person) and round down with Math.floor
let maxOccupancy=Math.floor(squareFootage/10);
console.log(maxOccupancy);

// Check if the lease year is a leap year.A year is a leap year if it's divisible by 4, except for years divisible by 100 (unless also divisible by 400)
if (leaseYear%4==0){
    if(leaseYear%400==0){
        console.log("true");
    }
    else if(leaseYear%100==0){
        console.log("false");
    }
    else{
        console.log("true");
    }
}
else{
    console.log("false");
}

// TODO: Calculate parking fee ($3 per hour) by multiplying parking hours by 3
let parkingFee=parkingHours*3;
console.log(parkingFee);


