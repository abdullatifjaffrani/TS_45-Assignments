// Assignment no 17
//Seeing the World: Think of at least five places in the world you’d like to visit.

// 1- Store the locations in a array. Make sure the array is not in alphabetical order.
let locations: string[] = ["Jerusalem", "Makkah", "Madina", "Ankara"];

// 2- Print your array in its original order.
console.log("Original order", locations); 

// 3- Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order", locations.slice().sort());

// 4- Show that your array is still in its original order by printing it.
console.log("Original order", locations)

// 5- Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order", locations.slice().sort().reverse());

// 6- Show that your array is still in its original order by printing it again.
console.log("Original order", locations);

// 7- Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Original Order", locations.reverse());

// 8- Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse Again for its Original Order", locations.reverse());

// 9- Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort Original in Alphabetical Order", locations.sort());

// 10- Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sort Original in Reverse Alphabetical Order", locations.sort().reverse());
