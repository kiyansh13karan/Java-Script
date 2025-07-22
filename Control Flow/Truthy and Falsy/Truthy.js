// Truthy Values in JavaScript

/*
In JavaScript, a truthy value is any value that evaluates to true when used in a Boolean context (like inside an if statement).
*/


// Examole of truthy values 
if ("hello") console.log("This is truthy");       // non-empty string
if (42) console.log("This is truthy");            // non-zero number
if ([]) console.log("This is truthy");            // empty array
if ({}) console.log("This is truthy");            // empty object
if (true) console.log("This is truthy");          // true
if (new Date()) console.log("This is truthy");    // valid Date object




// Common truthy values 
/*
| Type                       | Example                 |
| -------------------------- | ----------------------- |
| Non-zero Number            | `1`, `-1`, `3.14`       |
| Non-empty String           | `"Hello"`, `" "`        |
| Objects                    | `{}`, `[]`, `new Set()` |
| Functions                  | `function() {}`         |
| `Infinity` and `-Infinity` | Truthy                  |
| Instances of Classes       | `new MyClass()`         |
*/



let name = "Karan";

if (name) {
  console.log("Hello, " + name);  // Output: Hello, Karan
}
// NOTE :- If name were "" (empty string), it would be falsy and the block wouldn't run.