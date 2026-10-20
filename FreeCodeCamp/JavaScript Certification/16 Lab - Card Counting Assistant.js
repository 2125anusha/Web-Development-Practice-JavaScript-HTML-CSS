let count=0;
let cardString=["J","Q","K","A"];
function cardCounter(card){
  let cardStr;
  if (typeof card==="string"){
      cardStr=card.toUpperCase()
  }
  if ((card>0 && card<=10) || (cardString.includes(cardStr))){
    if (card==2 || card==3 || card==4 || card==5 || card==6){
      count+=1
    }
    else if(card==10 ||  cardStr=="J" ||   cardStr=="Q" || cardStr=="K" ||  cardStr=="A"){
      count-=1
    }
  } 
  else{
    console.log("Invalid value")
  }
  return count<=0 ? `${count} Hold` : `${count} Bet`
}
console.log(cardCounter("2"))
console.log(cardCounter("J"))