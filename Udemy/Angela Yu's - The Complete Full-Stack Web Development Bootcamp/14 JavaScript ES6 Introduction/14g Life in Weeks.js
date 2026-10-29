function lifeInWeeks(age) {    
    const days=365;
    const weeks=52;
    const months=12;
    
    let yearsLeft= 90-age;
    let daysUntil90 = yearsLeft * days;
    let weeksUntil90 = yearsLeft * weeks;
    let monthsuntil90 = yearsLeft * months;
    
    console.log("You have "+daysUntil90+ " days, "+weeksUntil90+" weeks, and "+monthsuntil90+" months left.")
    
}
let age=prompt("Enter your age: ");
lifeInWeeks(age);

