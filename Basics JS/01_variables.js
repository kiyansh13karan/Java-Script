// variables in java script

// 1. var
var name = "John";
console.log(name); // Output: John
// prefer not to use var because of functional scope issues and hoisting behavior

// 2. let
let age = 30;
console.log(age); // Output: 30

// 3. const
const pi = 3.14;
console.log(pi); // Output: 3.14

// 4. Reassigning variables
name = "Doe"; // Reassigning var
console.log(name); // Output: Doe
age = 31; // Reassigning let
console.log(age); // Output: 31

// pi = 3.14159; // Error: Assignment to constant variable (const cannot be reassigned)

// 5. Variable scope
function testScope() {
    var localVar = "I am local";
    let blockVar = "I am block scoped";
    console.log(localVar); // Output: I am local
    console.log(blockVar); // Output: I am block scoped
}
testScope();

// console.log(localVar); // Error: localVar is not defined (var is function scoped)
// console.log(blockVar); // Error: blockVar is not defined (let is block scoped
// 6. Hoisting
console.log(hoistedVar); // Output: undefined (var is hoisted)
var hoistedVar = "I am hoisted";
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization (let is not hoisted)
let hoistedLet = "I am hoisted too";
// console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization (const is not hoisted)
const hoistedConst = "I am also hoisted";
console.log(hoistedVar); // Output: I am hoisted

// 7. Global vs Local Scope
var globalVar = "I am global";
function localScope() {
    var localVar = "I am local";
    console.log(globalVar); // Output: I am global
    console.log(localVar); // Output: I am local
}
localScope();