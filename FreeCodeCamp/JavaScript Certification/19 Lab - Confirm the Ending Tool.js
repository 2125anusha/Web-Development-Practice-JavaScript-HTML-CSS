function confirmEnding(stringToCheck,stringAgainst){
  let lenStringAgainst=stringAgainst.length;
  let slicedStr=stringToCheck.slice(-lenStringAgainst)
  if (slicedStr==stringAgainst){
    return true
  }
  else return false
}
let output=confirmEnding("Abstraction", "action")
console.log(output)
