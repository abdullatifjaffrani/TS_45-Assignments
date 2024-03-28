// Assignment no 10
// Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.

// First we add Our Friends name in Array in names Variable
let names: string [] = ["Salman", "Kamran", "Arsalan"]


// Here we are Printing Each Friend name using forEach method
names.forEach(name => {
    console.log(name);
    
});




// We can also did this with forLoop method
// for (let i = 0; i < names.length; i++) {
    
//     console.log (names[i]);
// }

// We can also did this with forLoop method
// for (const name of names) {
//     console.log(name);
    
// }
