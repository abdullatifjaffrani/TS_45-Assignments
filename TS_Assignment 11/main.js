"use strict";
// Assignment no 11
// Greetings
// Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.
// First we add Our Friends name in Array in names Variable
let names = ["Salman", "Kamran", "Arsalan"];
// Here we are Printing Each Friend name using forEach method
names.forEach(name => {
    console.log(`Hi, ${name}! How are you?`);
});
