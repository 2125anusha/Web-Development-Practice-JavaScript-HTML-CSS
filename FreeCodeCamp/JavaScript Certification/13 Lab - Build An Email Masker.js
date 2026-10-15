function  maskEmail(email){
  let findIndex=email.indexOf("@")
  let textToReplace=email.slice(1,findIndex-1)
  let replacedText="*".repeat(textToReplace.length)
  let maskedEmail=email.replace(textToReplace,replacedText)
  return maskedEmail
}
let email="freecodecamp@example.com";
console.log(maskEmail(email))