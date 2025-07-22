// Maths in Javascript 

/*
JavaScript provides a built-in Math object for performing mathematical operations and calculations. It includes constants, functions, and methods for arithmetic, trigonometry, logarithms, rounding, etc.
*/


// Basic arithmetic operations
let num1 = 42.5;
let num2 = 3.14;
let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
let remainder = num1 % 5; // Modulus (remainder)
console.log(sum, difference, product, quotient, remainder); // Output: 45.14 39.36 133.35 13.507936507936508 2.5
console.log(typeof sum, typeof difference, typeof product, typeof quotient, typeof remainder); // Output: "number" "number" "number" "number" "number"



let numToExponential = num1.toExponential(2); // Convert number to exponential notation with 2 decimal places
console.log(numToExponential); // Output: "4.25e+1"
console.log(typeof numToExponential); // Output: "string"
let numToFixed = num2.toFixed(2); // Format number to 2 decimal places
console.log(numToFixed); // Output: "3.14"
console.log(typeof numToFixed); // Output: "string"
let numToString = num1.toString(); // Convert number to string
console.log(numToString); // Output: "42.5"
console.log(typeof numToString); // Output: "string"

let parsedInt = parseInt("42.5"); // Convert string to integer
console.log(parsedInt); // Output: 42
console.log(typeof parsedInt); // Output: "number"

let parsedFloat = parseFloat("42.5"); // Convert string to float
console.log(parsedFloat); // Output: 42.5
console.log(typeof parsedFloat); // Output: "number"

let parsedHex = parseInt("0x2A"); // Convert hexadecimal string to integer
console.log(parsedHex); // Output: 42
console.log(typeof parsedHex); // Output: "number"

let parsedBinary = parseInt("101010", 2); // Convert binary string to integer
console.log(parsedBinary); // Output: 42
console.log(typeof parsedBinary); // Output: "number"

let parsedFloat2 = parseFloat("3.14e2"); // Parse scientific notation to float
console.log(parsedFloat2); // Output: 314
console.log(typeof parsedFloat2); // Output: "number"
console.log(parsedFloat); // Output: 42.5
console.log(typeof parsedFloat); // Output: "number"
console.log(parsedFloat2); // Output: 314
console.log(typeof parsedFloat2); // Output: "number"
console.log(parsedFloat.toFixed(2)); // Output: "42.50" (formatted to 2 decimal places)
console.log(typeof parsedFloat.toFixed(2)); // Output: "string"
console.log(parsedFloat.toExponential(2)); // Output: "4.25e+1" (exponential notation with 2 decimal places)
console.log(typeof parsedFloat.toExponential(2)); // Output: "string"
console.log(parsedInt.toString()); // Output: "42" (converted to string)
console.log(typeof parsedInt.toString()); // Output: "string"
console.log(parsedFloat.toString()); // Output: "42.5" (converted to string)
console.log(typeof parsedFloat.toString()); // Output: "string"
console.log(parsedHex); // Output: 42 (parsed from hexadecimal)
console.log(typeof parsedHex); // Output: "number"
console.log(parsedBinary); // Output: 42 (parsed from binary)
console.log(typeof parsedBinary); // Output: "number"
console.log(parsedFloat2); // Output: 314 (parsed from scientific notation)
console.log(typeof parsedFloat2); // Output: "number"
console.log(parsedFloat2.toFixed(2)); // Output: "314.00" (formatted to 2 decimal places)
console.log(typeof parsedFloat2.toFixed(2)); // Output: "string"

// Increment and Decrement
let increment = num1++; // Post-increment
let decrement = num2--; // Post-decrement
console.log(increment); // Output: 42.5 (original value before increment)
console.log(decrement); // Output: 3.14 (original value before decrement)
console.log(num1); // Output: 43.5 (num1 is now incremented)
console.log(num2); // Output: 2.14 (num2 is now decremented
let preIncrement = ++num1; // Pre-increment
let preDecrement = --num2; // Pre-decrement
console.log(preIncrement); // Output: 44.5 (num1 is incremented before assignment)
console.log(preDecrement); // Output: 1.14 (num2 is decremented before assignment)
console.log(num1); // Output: 44.5 (num1 is now 44.5 after pre-increment)
console.log(num2); // Output: 1.14 (num2 is now 1.14 after pre-decrement)

// Math operations
let absoluteValue = Math.abs(-42.5); // Absolute value
console.log(absoluteValue); // Output: 42.5
console.log(typeof absoluteValue); // Output: "number"

let roundedValue = Math.round(42.5); // Round to nearest integer
console.log(roundedValue); // Output: 43
console.log(typeof roundedValue); // Output: "number"

let floorValue = Math.floor(42.9); // Round down to nearest integer
console.log(floorValue); // Output: 42
console.log(typeof floorValue); // Output: "number"

let ceilValue = Math.ceil(42.1); // Round up to nearest integer
console.log(ceilValue); // Output: 43
console.log(typeof ceilValue); // Output: "number"

let powerValue = Math.pow(2, 3); // 2 raised to the power of 3
console.log(powerValue); // Output: 8   
console.log(typeof powerValue); // Output: "number"

let squareRoot = Math.sqrt(16); // Square root of 16
console.log(squareRoot); // Output: 4
console.log(typeof squareRoot); // Output: "number"

let randomValue = Math.random(); // Random number between 0 and 1
console.log(randomValue); // Output: A random number (e.g., 0.123456789)
console.log(typeof randomValue); // Output: "number"

let minValue = Math.min(1, 2, 3, 4, 5); // Minimum value
console.log(minValue); // Output: 1
console.log(typeof minValue); // Output: "number"

let maxValue = Math.max(1, 2, 3, 4, 5); // Maximum value
console.log(maxValue); // Output: 5
console.log(typeof maxValue); // Output: "number"

let logValue = Math.log(10); // Natural logarithm of 10
console.log(logValue); // Output: 2.302585092994046
console.log(typeof logValue); // Output: "number"

let log10Value = Math.log10(100); // Base 10 logarithm of 100
console.log(log10Value); // Output: 2
console.log(typeof log10Value); // Output: "number"

let log2Value = Math.log2(8); // Base 2 logarithm of 8
console.log(log2Value); // Output: 3
console.log(typeof log2Value); // Output: "number"

let expValue = Math.exp(1); // e raised to the power of 1
console.log(expValue); // Output: 2.718281828459045
console.log(typeof expValue); // Output: "number"

let sinValue = Math.sin(Math.PI / 2); // Sine of 90 degrees (PI/2 radians)
console.log(sinValue); // Output: 1
console.log(typeof sinValue); // Output: "number"





// maths methods 
// common math methods
/*
| Method              | Description                   | Example                   |
| ------------------- | ----------------------------- | ------------------------- |
| `Math.abs(x)`       | Absolute value                | `Math.abs(-5)` → `5`      |
| `Math.ceil(x)`      | Rounds **up**                 | `Math.ceil(4.3)` → `5`    |
| `Math.floor(x)`     | Rounds **down**               | `Math.floor(4.7)` → `4`   |
| `Math.round(x)`     | Rounds to nearest integer     | `Math.round(4.5)` → `5`   |
| `Math.trunc(x)`     | Removes fractional part       | `Math.trunc(4.9)` → `4`   |
| `Math.max(a, b...)` | Largest value                 | `Math.max(1, 9, 3)` → `9` |
| `Math.min(a, b...)` | Smallest value                | `Math.min(1, 9, 3)` → `1` |
| `Math.sqrt(x)`      | Square root                   | `Math.sqrt(9)` → `3`      |
| `Math.pow(x, y)`    | Power (x^y)                   | `Math.pow(2, 3)` → `8`    |
| `Math.random()`     | Random number between 0 and 1 | `Math.random()` → `0.123` |
*/