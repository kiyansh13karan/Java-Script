// Do While Loop :- 

/*
The do...while loop is similar to the while loop, but with one key difference:
The block executes at least once, even if the condition is false initially.
*/


/*
Syntax :- 


do {
  // code to execute
} while (condition);

*/



// Example :- 
let i = 0 ;

do {
  console.log("i =", i) ;
  i++ ;
} while (i < 5) ;






// Using Break and Continue statement :- 
{
    let i = 0;

    do {
    i++;
    if (i === 2) continue; // skips 2
    if (i === 4) break;    // stops at 4
    console.log(i);
    } while (i < 5);
}