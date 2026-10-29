let name = prompt("enter a text: ");
let firstLetter =name.slice(0,1).toUpperCase();
let remainLetters=name.slice(1,name.length).toLowerCase();
let capitalisedName=firstLetter.concat(remainLetters);
alert("Hello, " +capitalisedName+ "!");