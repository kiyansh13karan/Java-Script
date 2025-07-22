// Global and local scopes in js 



// 1. Global Scope :- 
/*
A variable declared outside any function or block has global scope.
It is accessible anywhere in your code, including inside functions.
*/
let globalVar = "I'm global!";

function showGlobal() {
  console.log(globalVar);  // Accessible here
}

showGlobal();
console.log(globalVar);    // Also accessible here




// 2. Local Scope :- 
/*
A variable declared inside a function or block (like if, for, etc.) has local scope.
It is accessible only within that function or block.
*/
function greet() {
  let localVar = "Hello";
  console.log(localVar);  // Accessible here
}

greet();
// console.log(localVar); //  Error: localVar is not defined






// 3. Block Scope :- 
/*
Variables declared with let or const inside a block ({}) are block-scoped.
Not accessible outside the block.
*/
if (true) {
  let blockVar = "I'm block scoped!";
  console.log(blockVar); // ✅
}
// console.log(blockVar); //Error
// var does not have block scope — it's function scoped, so avoid using it for block scoping.

