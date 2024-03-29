// Assignment no 15
// More Guests: You just found a bigger dinner table, 
// so now more space is available. Think of three more guests to invite to dinner.
// - Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// - Add one new guest to the beginning of your array.
// - Add one new guest to the middle of your array. 
// - Use append() to add one new guest to the end of your list. 
// - Print a new set of invitation messages, one for each person in your list.

// First we will create a Guest List variable in Array
let GuestList: string[] = ["Ali", "Hamza", "Usama"];

// Now we will Remove Unattendies & Print his name in log with msg
let Unattendies: string = GuestList.splice(2,1)[0]
console.log(`${Unattendies} Can't make Dinner`);

// Now we will Add New Guest in Guest List
GuestList.push("Umer", "Ahmed");

// Now we will Add New Guest in The Begning of Our Array, We will use Unshift Method here
GuestList.unshift("Asad", "Iqbal");

// Now we will Add New Guest in The Middle of Our Array, Using Splice Method
GuestList.splice(Math.floor(GuestList.length / 2), 0, "Sohail");

// Now we will Add New Guest in The End of Our Array, Using Push Method
GuestList.push("Shahid");

// Then we will print a message to our Guest list who are Attending New & Old
for (let i = 0; i < GuestList.length; i++) {
    console.log(`Hi, ${GuestList[i]}! Would you like to Dinner with us?`);
}
// Here we are Printing a Bigger Table Message to our Guest List. 
console.log("Good News! We just found a Bigger Table for our Dinner");



