"use strict";
// Assignment no 16
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// - Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.
// - Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// - Print a message to each of the two people still on your list, letting them know they’re still invited.
// - Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
// First we will create a Guest List variable in Array
let GuestList = ["Ali", "Hamza", "Usama"];
// Now we will Remove Unattendies & Print his name in log with msg
let Unattendies = GuestList.splice(2, 1)[0];
// console.log(`${Unattendies} Can't make Dinner`);
// Now we will Add New Guest in Guest List
GuestList.push("Umer", "Ahmed");
// Now we will Add New Guest in The Begning of Our Array, We will use Unshift Method here
GuestList.unshift("Asad", "Iqbal");
// Now we will Add New Guest in The Middle of Our Array, Using Splice Method
GuestList.splice(Math.floor(GuestList.length / 2), 0, "Sohail");
// Now we will Add New Guest in The End of Our Array, Using Push Method
GuestList.push("Shahid");
// Here we will Print our Bad news in log
console.log("Unfortunattly!! The Dinner Table wont Arraive at Time, So we can Invite only 2 Guest");
// Here we will remove our Guests
while (GuestList.length > 2) {
    let RemovedGuest = GuestList.pop();
    if (RemovedGuest !== undefined) {
        console.log(`Sorry, ${RemovedGuest}! You are not invited.`);
    }
}
// Here we will Print The Our Guest Whom we are Still Invited
GuestList.forEach(StillInvited => {
    console.log(`${StillInvited} You are Still Invited`);
});
// Here we will remove Our Last Remainig 2 guests
GuestList.splice(0, GuestList.length);
console.log("Updated List of Guest:", GuestList);
