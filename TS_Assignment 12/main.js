"use strict";
// Assignment no 12
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
// First we Save our Trasp. name in Variable usnig array
let favTransportation = ["Bike", "Car", "Bus", "Train"];
// Now here we are Printing all our Tranp. name with msg
for (let i = 0; i < favTransportation.length; i++) {
    console.log(`I would like to own a ${favTransportation[i]}`);
}
