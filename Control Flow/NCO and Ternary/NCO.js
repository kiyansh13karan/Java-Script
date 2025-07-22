// Nullish Coalescing Operator (??)

/*
The nullish coalescing operator (??) is used to provide a default value only when the left-hand operand is null or undefined.
*/



// Syntax :- 
/*
let result = value ?? defaultValue ;



NOTE  :-

If value is null or undefined, defaultValue is returned.
Otherwise, value is returned.
*/





// Example :-  1
let name = null;
let username = name ?? "Guest";
console.log(username);  // Output: "Guest"



// Example :- 2
let age = 0;
let displayAge = age ?? 18;
console.log(displayAge);  // Output: 0 
//  Note: age ?? 18 returns 0, because 0 is not null or undefined, even though it's falsy.







// Use Case: Avoid Overriding Falsy but Valid Values
let score = 0;
let finalScore = score ?? 100;
console.log(finalScore);  // Output: 0 

let scoreAlt = score || 100;
console.log(scoreAlt);    // Output: 100  (because 0 is falsy)





// Cannot combine ?? with && or || without parentheses
// let x = null || undefined ?? "default" ; // (Invalid)

// Valid 
let x = (null || undefined) ?? "default";

