// Immediately invoked function expression :- 

/*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
*/



// Syntax :- 
/*

(function () {
  // code here runs immediately
})() ;






using arrow function :- 
(() => {
  // code here runs immediately
})();

*/








/*
Key Points :- 

It's a function expression wrapped in parentheses ().
It is immediately invoked with ().
Creates a private scope, useful for encapsulation.
Prevents polluting the global scope.


global scope ke pollution se problem hoti hai kyi baar to uske pollution ko htane ke liye humne IIFE ka use kiya 
*/



// Example of IIFE (named IIFE)
(function connection() {
    console.log("DB CONNECTED") ;
}());





// Arrow function IIFE (unnamed IIFE)
((name) => {
  console.log(`Arrow IIFE executed by ${name}`);
})("Karan");
// Output: Arrow IIFE executed!
