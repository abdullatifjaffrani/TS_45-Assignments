//Assignment no 4
// Repeat Exercise 3, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. 
// First we Create Add Famous Person Variable
var famous_person = "Wasif Ali Wasif";
// Now Its Time For Its Quote
var quote = "Sochne Wala Zehan aur Mehsus Karne Wala Dil Naseeb Walo Ko Ata Hote Hain..";
// Now We are Merging Quote & famouse Person in another Variable
var message = ("".concat(famous_person, " Once Said, \"").concat(quote, "\""));
//Printing
console.log(message);
