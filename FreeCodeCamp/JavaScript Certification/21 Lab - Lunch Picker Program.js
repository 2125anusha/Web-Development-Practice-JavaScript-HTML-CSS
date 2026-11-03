let lunches=[]
function addLunchToEnd(lunchMenu,lunchItem){
  lunchMenu.push(lunchItem)
  console.log (`${lunchItem} added to the end of the lunch menu.`)
  return lunchMenu;
}

function addLunchToStart(lunchMenu,lunchItem){
  lunchMenu.unshift(lunchItem)
  console.log (`${lunchItem} added to the start of the lunch menu.`)
  return lunchMenu;
}

function removeLastLunch(lunchMenu){
  if(lunchMenu.length==0){
    console.log("No lunches to remove.")
  }
  else{
    let removedLunchItem=lunchMenu.pop()
    console.log(`${removedLunchItem} removed from the end of the lunch menu.`)
    return lunchMenu;
  }
 
}

function removeFirstLunch(lunchMenu){
  if(lunchMenu.length==0){
    console.log("No lunches to remove.");
  }
  else{
    let removedLunchItem=lunchMenu.shift()
    console.log(`${removedLunchItem} removed from the start of the lunch menu.`);
    return lunchMenu;
  }
}

function getRandomLunch(lunchMenu){
  if(lunchMenu.length==0){
    console.log("No lunches available.");
  }
  else{
    let randomLunchItem=lunchMenu[Math.floor(Math.random() * lunchMenu.length)]
    console.log(`Randomly selected lunch: ${randomLunchItem}`)
  }
}

function showLunchMenu(lunchMenu){
  if(lunchMenu.length==0){
    console.log("The menu is empty.")
  }
  else{  
    let updatedMenu=lunchMenu.join(', ')
    console.log(`Menu items: ${updatedMenu}`)
  }
}

removeLastLunch(["Stew", "Soup", "Toast"]);
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]))