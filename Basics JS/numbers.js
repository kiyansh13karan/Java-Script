// Numbers in javascript

// JavaScript has only one type of number, which is a double-precision 64-bit binary format IEEE 754 value.
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point
let num3 = -7; // Negative number
let num4 = 0; // Zero
let num5 = 1e6; // Scientific notation (1 million)
console.log(num1, num2, num3, num4, num5); // Output: 42 3.14 -7 0 1000000

// Special numeric values
let infinityValue = Infinity; // Positive infinity
let negativeInfinityValue = -Infinity; // Negative infinity
let notANumberValue = NaN; // Not-a-Number
console.log(infinityValue); // Output: Infinity
console.log(typeof infinityValue); // Output: "number" (Infinity is considered a number in JavaScript)
console.log(negativeInfinityValue); // Output: -Infinity
console.log(typeof negativeInfinityValue); // Output: "number"
console.log(notANumberValue); // Output: NaN
console.log(typeof notANumberValue); // Output: "number"

// Arithmetic operations
let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
let remainder = num1 % 5; // Modulus (remainder)
console.log(sum, difference, product, quotient, remainder); // Output: 45.14 38.86 131.88 13.333333333333334 2

// Increment and Decrement
let increment = num1++; // Post-increment
let decrement = num1--; // Post-decrement
console.log(increment, decrement); // Output: 42 43 (incremented to 43 after the operation)
console.log(num1); // Output: 42 (num1 is now 42 after decrement)
let preIncrement = ++num1; // Pre-increment
let preDecrement = --num1; // Pre-decrement
console.log(preIncrement, preDecrement); // Output: 43 41 (num1 is incremented to 43 and then decremented to 41)
console.log(num1); // Output: 41 (num1 is now 41 after pre-decrement)




let x = Infinity;     // Positive infinity
let y = -Infinity;    // Negative infinity
let z = NaN;          // Not a Number
console.log(x, y, z); // Output: Infinity -Infinity NaN
console.log(typeof x, typeof y, typeof z); // Output: "number" "number" "number"
console.log(isFinite(x)); // Output: false (Infinity is not finite)
console.log(isFinite(y)); // Output: false (Negative Infinity is not finite)
console.log(isFinite(z)); // Output: false (NaN is not finite)
console.log(isNaN(x)); // Output: false (Infinity is a number)
console.log(isNaN(y)); // Output: false (Negative Infinity is a number)
console.log(isNaN(z)); // Output: true (NaN is not a number)





// Number methods

// 1. toString
let numToString = num1.toString(); // Convert number to string
console.log(numToString); // Output: "41"
console.log(typeof numToString); // Output: "string"

// 2. toFixed
let numToFixed = num2.toFixed(2); // Format number to 2 decimal places
console.log(numToFixed); // Output: "3.14"
console.log(typeof numToFixed); // Output: "string"

// 3. toExponential
let numToExponential = num1.toExponential(2); // Convert number to exponential
console.log(numToExponential); // Output: "4.10e+1"
console.log(typeof numToExponential); // Output: "string"

// 4. parseInt and parseFloat
let parsedInt = parseInt("42.5"); // Parse string to integer
let parsedFloat = parseFloat("42.5"); // Parse string to float
console.log(parsedInt); // Output: 42
console.log(typeof parsedInt); // Output: "number"
console.log(parsedFloat); // Output: 42.5
console.log(typeof parsedFloat); // Output: "number"

// 5. isNaN
let isNaNCheck = isNaN("Hello"); // Check if value is NaN
console.log(isNaNCheck); // Output: true (because "Hello" cannot be converted to a number)
console.log(Number.isNaN(NaN)); // Output: true (Number.isNaN is a more reliable way to check for NaN)

// 6. Number.isInteger
let isIntegerCheck = Number.isInteger(num1); // Check if number is an integer
console.log(isIntegerCheck); // Output: true (41 is an integer)

// 7. Number.isFinite
let isFiniteCheck = Number.isFinite(num1); // Check if number is finite
console.log(isFiniteCheck); // Output: true (41 is a finite number)

let hunderds = 10000000
console.log(hunderds.toLocaleString('en-IN')); // en-In = indian format for dividing zeroes






