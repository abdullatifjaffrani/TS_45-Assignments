"use strict";
// Assignment no 14
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// So you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// - Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// - Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// - Print a second set of invitation messages, one for each person who is still in your list.
// First we will create a Guest List variable in Array
let GuestList = ["Ali", "Hamza", "Usama"];
// Now we will Remove Unattendies & Print his name in log with msg
let Unattendies = GuestList.splice(2, 1)[0];
console.log(`${Unattendies} Can't make Dinner`);
// Now we will Add New Guest in Guest List
GuestList.push("Umer", "Ahmed");
// Then we will print a message to our Guest list who are Attending New & Old
for (let i = 0; i < GuestList.length; i++) {
    console.log(`Hi, ${GuestList[i]}! Would you like to Dinner with us?`);
}
