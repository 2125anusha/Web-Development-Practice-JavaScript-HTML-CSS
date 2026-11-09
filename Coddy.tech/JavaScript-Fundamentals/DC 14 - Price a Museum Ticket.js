let day = parseInt(prompt("Enter numbers 1 to 7 where 1 represents Monday, 3 is Wednesday, 7 is Sunday: "));

let member = prompt("Are you a member? Enter 'true' or 'false': ").toLowerCase() === "true";

if(day==1){
    console.log("Closed on Mondays");
}
else{
    if(!member){
        if(day==3){
            console.log("Ticket: 6")
        }
        else{
            console.log("Ticket: 12")
        }
    }
    else{
        console.log("Ticket: 0")
    }  
}

```
Challenge Instructions:
A museum ticket costs 12. Members get in free, and on Wednesdays everyone else pays 6.
The museum is closed on Mondays, for members too.
Read the day number, from 1 (Monday) to 7 (Sunday), and whether the visitor is a member (true or false), each on its own line.
On a Monday print Closed on Mondays. 
On any other day print Ticket: followed by the price.
```