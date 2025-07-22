// Ternary Operator :- 

/*
The ternary operator is a shortcut for if...else statements. It allows you to evaluate a condition and return one of two values based on whether the condition is true or false.
*/


// Symtax :- 
/*
condition ? expressionIfTrue : expressionIfFalse;
*/



// Example :- 
let age = 20 ;
let status = (age >= 18) ? "Adult" : "Minor" ;
console.log(status) ;  // Output: "Adult"



// using function :- 
function greet(user) {
  return user ? `Hello, ${user}` : "Hello, Guest";
}

console.log(greet("Karan"));  // Hello, Karan
console.log(greet(""));       // Hello, Guest




// Chaining Ternary operator :- 
let score = 75;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            "F";

console.log(grade); // Output: C

