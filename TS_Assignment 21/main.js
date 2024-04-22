"use strict";
// Assignment no 21
// Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
// First we try to make an array and then we try to access an index which is not present in the array.
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr[6]);
// Now we fix the error by adding a new index to the array.
arr.push(7);
console.log(arr[6]);
