// Assignment 22

//Conditional Tests: Write a series of conditional tests.
//Print a statement describing each test and your prediction for the results of each test.
//Your code should look something like this:
/* let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
Look closely at your results, and make sure you understand why each line evaluates to True or False.
Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let number1 = 10;
let number2 = 5;
let string1 = 'hello';
let string2 = 'world';
let boolean1 = true;
let boolean2 = false;

// Test 1
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);

// Test 2
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

// Test 3
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 === 'hello');

// Test 4
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 === string2);

// Test 5
console.log("Is boolean1 equal to true? I predict True.");
console.log(boolean1 === true);

// Test 6
console.log("Is boolean2 equal to false? I predict True.");
console.log(boolean2 === false);

// Test 7
console.log("Is one of boolean1 or boolean2 true while the other is false? I predict True.");
console.log((boolean1 && !boolean2) || (!boolean1 && boolean2));

// Test 8
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// Test 9
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2);

// Test 10
console.log("Is number1 equal to 10? I predict True.");
console.log(number1 === 10);