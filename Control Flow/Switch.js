// Switch Statement :- 
/*
The switch statement is used to perform different actions based on different conditions. It's a cleaner alternative to using multiple if...else if statements when checking one variable against many values.
*/


// Syntax :- 
/*
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if no case matches
}
*/





// Example code of switch statement :- 
let day = 3 ;
let dayName ;

switch (day) {
  case 1 :
    dayName = "Monday" ;
    break ;
  case 2 :
    dayName = "Tuesday" ;
    break ;
  case 3 :
    dayName = "Wednesday" ;
    break ;
  case 4 :
    dayName = "Thursday" ;
    break ;
  case 5 :
    dayName = "Friday" ;
    break ;
  default :
    dayName = "Weekend or Invalid Day" ;
}

console.log(dayName) ;  // Output: Wednesday






// Switch with user input and string :- 
let fruit = prompt("Enter a fruit name (apple, banana, mango):") ;

switch (fruit.toLowerCase()) {
  case "apple" :
    console.log("Apples are red or green.") ;
    break ;
  case "banana" :
    console.log("Bananas are yellow.") ;
    break ;
  case "mango" :
    console.log("Mangoes are sweet and tropical.") ;
    break ;
  default :
    console.log("Sorry, I don't know that fruit.") ;
}
