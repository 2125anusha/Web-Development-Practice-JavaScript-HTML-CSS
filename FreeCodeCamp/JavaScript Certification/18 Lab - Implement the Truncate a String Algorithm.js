function truncateString(text,num){
  if(text.length>num){
    let truncatedText=text.slice(0,num)
    let replacedText="..."
    let changedText=truncatedText.concat('',replacedText)
    return changedText
  }
  else return text
}

let output=truncateString("A-tisket a-tasket A green and yellow basket", 8)
console.log(output)