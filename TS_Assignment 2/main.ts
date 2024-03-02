// Assignment 2
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// 1st we store a person name in variable
let PersonName:String = "Abdul Latif Jaffrani"

// Now we will set person’s name in lowercase to print
console.log ("lowercase:", PersonName.toLowerCase())

// Now we will set person’s name in UPPERCASE to print
console.log ("UPPERCASE:", PersonName.toUpperCase())

// Now we will set person’s name in TitleCase to print
console.log("TitleCase:", PersonName.replace(/\b\w/g, c => c.toUpperCase()));