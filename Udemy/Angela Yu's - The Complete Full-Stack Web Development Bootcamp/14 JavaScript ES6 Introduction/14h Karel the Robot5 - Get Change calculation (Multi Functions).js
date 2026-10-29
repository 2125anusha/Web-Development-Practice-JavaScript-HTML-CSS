
function getMilk(money,costPerBottle){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("You can buy "+calculateBottles(money,costPerBottle) +" bottles of milk for $"+money);
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calculateChange(money,costPerBottle);
}  

function calculateBottles(startMoney,costPerBottle){
    let numberOfBottles= Math.floor(startMoney/costPerBottle)
    return numberOfBottles;
}


function calculateChange(startingAmount,costPerBottle){
    let change = startingAmount % costPerBottle;
    return change;
}

let change = getMilk(10,1.5);
console.log("Your change is: $"+change)