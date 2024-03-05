//Assignment no 4
// Repeat Exercise 3, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. 

// First we Create Add Famous Person Variable
let famous_person:String = "Wasif Ali Wasif";

// Now Its Time For Its Quote
let quote:String = "Sochne Wala Zehan aur Mehsus Karne Wala Dil Naseeb Walo Ko Ata Hote Hain..";

// Now We are Merging Quote & famouse Person in another Variable
let message:String = (`${famous_person} Once Said, "${quote}"`);

//Printing
console.log(message);