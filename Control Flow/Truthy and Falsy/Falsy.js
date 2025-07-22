// Falsy Values in js
/*
A falsy value is a value that evaluates to false when converted to a Boolean in a conditional context (like inside an if statement).
*/


// There are exsctly 7 falsy values in js 
/*
| Falsy Value | Description                          |
| ----------- | ------------------------------------ |
| `false`     | The Boolean value `false`            |
| `0`         | The number zero                      |
| `-0`        | Negative zero                        |
| `0n`        | BigInt zero                          |
| `""`        | Empty string                         |
| `null`      | Null value                           |
| `undefined` | A variable that hasn’t been assigned |
| `NaN`       | Not-a-Number                         |
*/


if (false) console.log("Nope") ;       // Won’t run
if (0) console.log("Nope") ;           // Won’t run
if ("") console.log("Nope") ;          // Won’t run
if (null) console.log("Nope") ;        // Won’t run
if (undefined) console.log("Nope") ;   // Won’t run
if (NaN) console.log("Nope") ;         // Won’t run




// Using Booelan fuction :- 
// you can check whether the value is truthy or falsy by using boolean function 
console.log(Boolean("")) ;     // false
console.log(Boolean("hello")) ;// true
console.log(Boolean(0)) ;      // false
console.log(Boolean(100)) ;    // true




// Flasy with logical operator 
let username = "" ;
let nameToDisplay = username || "Guest" ;
console.log(nameToDisplay) ; // Output: "Guest"
// NOTE :- username is falsy (""), so || returns "Guest".