// Control Flow :- 
/*
Control flow is the order in which the computer executes statements in a script. In JavaScript, control flow is used to manage the execution path based on different conditions.
*/


let a = 10 ; 
let b = 5 ; 

// If statement :- 
if (a > b) {
  console.log("a is greater than b");
}


// if_else 
if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater or equal");
}


// else if 
if (a > b) {
  console.log("a is greater");
} else if (a === b) {
  console.log("a and b are equal");
} else {
  console.log("b is greater");
}



// nested conditions 
const balance = 1000 

if(balance < 500) {
    console.log("Less than") ;
} else if(balance < 750) {
    console.log("Less than 500") ;
} else if(balance < 900) {
    console.log("Less than 900") ;
} else {
    console.log("Less than 1200") ;
}