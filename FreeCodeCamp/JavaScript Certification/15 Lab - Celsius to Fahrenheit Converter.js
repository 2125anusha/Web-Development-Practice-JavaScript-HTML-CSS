function convertCtoF(celsius){
  let fahrenheit = celsius * (9/5) + 32
  return fahrenheit
}
let temperature=convertCtoF(100)
console.log(temperature)