let guestCount = parseInt(prompt("How many guests will be attending?: "));
let snacksPerGuest = parseInt(prompt("Enter number of snacks each guest should bring: "));
let startTime="8:00 PM";

function planStargazingNight(guestCount, snacksPerGuest, startTime) {
    let totalSnacks=guestCount*snacksPerGuest;
    let output=`Welcome to our stargazing night! We need ${totalSnacks} snack packs and the event starts at ${startTime}.`
  return output;
}
console.log(planStargazingNight(guestCount, snacksPerGuest, startTime));