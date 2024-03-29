"use strict";
// Assignment no 13
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
// First we will create a Guest List variable in Array
let GuestList = ["Ali", "Hamza", "Usama"];
// Then we will print a message to each Guest
for (let i = 0; i < GuestList.length; i++) {
    console.log(`Hi, ${GuestList[i]}! Would you like to Dinner with us?`);
}
