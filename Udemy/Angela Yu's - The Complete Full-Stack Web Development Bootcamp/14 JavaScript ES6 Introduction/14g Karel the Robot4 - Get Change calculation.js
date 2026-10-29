function getMilk(money){
    let cost=1.5;
    let numberOfBottles= Math.floor(money/cost)
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("You can buy "+numberOfBottles+" bottles of milk for $"+money)
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % cost;
}  
    
let change = getMilk(5);
console.log("Your change is: $"+change)