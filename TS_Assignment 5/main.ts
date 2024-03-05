// Assignment no 5
//Stripping Names: Store a person’s name,
//and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed.
//Then print the name after striping the white spaces.

// 1st we store Name in Variable
let username: string = " \t \n Abdul Latif Jaffrani ";

// Now we print this as it ;is, so the whitespace around the name is displayed.
console.log(username)

// Now its time to print the nam;e after striping the white spaces.
console.log(username.trim());