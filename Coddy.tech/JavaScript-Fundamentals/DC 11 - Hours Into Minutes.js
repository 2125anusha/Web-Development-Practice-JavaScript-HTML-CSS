let hours = parseInt(prompt("Enter hours: "));
let mins = parseInt(prompt("Enter minutes: "));
function elapsedMinutes(hours, minutes) {
  let totalMins=0;
  if((hours>=0 && hours<24) && (minutes>=0 && minutes<60)){
      totalMins=(hours*60) + minutes;
  }
  return totalMins;
}
let totalMinutes = elapsedMinutes(hours, mins);
console.log(totalMinutes );
