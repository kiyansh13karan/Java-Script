// While Loop :- 

/*
The while loop runs as long as the condition is true. It's useful when you don’t know beforehand how many times the loop should run.
*/

/*
Syntax :-


while (condition) {
  // code to execute
}


The condition is checked before each iteration.
If the condition is false, the loop stops.
*/




// Example :- 
let i = 0;

while (i < 5) {
  console.log("i =", i) ;
  i++ ;
}



// Using Break and continue 
{    let i = 0 ;
    while (i < 10) {
    i++ ;
    if (i === 5) continue ;  // skips 5
    if (i === 8) break ;     // exits loop when i is 8
    console.log(i) ;
    }
}




// Real world Example :- 
    
    let password = "karannayal" ;

    while (password.length < 6) {
        password = prompt("Enter a password (at least 6 characters) : ") ;
    }
    console.log("Password accepted!") ;

