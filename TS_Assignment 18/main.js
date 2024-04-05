// Assignment no 18
// Dinner Guests: Working with one of the programs from Exercises 13 through 16, 
// print a message indicating the number of people you are inviting to dinner
// This is Our Old Ex. Data:
// Here we will create a Guest List variable in Array
var GuestList = ["Ali", "Hamza", "Usama"];
// Now we will Remove Unattendies & Print his name in log with msg
var Unattendies = GuestList.splice(2, 1)[0];
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
    var RemovedGuest = GuestList.pop();
    if (RemovedGuest !== undefined) {
        console.log("Sorry, ".concat(RemovedGuest, "! You are not invited."));
    }
}
// Here we will Print The Our Guest Whom we are Still Invited
GuestList.forEach(function (StillInvited) {
    console.log("".concat(StillInvited, " You are Still Invited"));
});
// Assignment no 18 Starts from Here, here we are indicating the number of people we are inviting
console.log("\nNumber of people invited to dinner: ".concat(GuestList.length));
