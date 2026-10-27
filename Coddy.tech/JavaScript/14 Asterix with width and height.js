let width = parseInt(prompt("Enter how many stars worth width: ")); 
let height = parseInt(prompt("Enter how many stars worth height: ")); 
for(let row=1;row<=height;row++){
    let line="";
    for(let col=1;col<=width;col++){
        line+="*";
    }
    console.log(line);
}
