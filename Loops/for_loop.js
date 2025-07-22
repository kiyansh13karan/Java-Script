// For loop in java script 

/*
The for loop is the most commonly used loop when you know how many times you want to repeat a block of code.
*/


// Syntax :- 
/*
for (initialization; condition; update) {
  // code to be executed
}



| Part             | Meaning                            |
| ---------------- | ---------------------------------- |
| `initialization` | Runs once before the loop starts   |
| `condition`      | Checked before each loop iteration |
| `update`         | Runs after each iteration          |

*/


// Basic Example :- 
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}




// Looping through an array :- 
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}




// Using break keyword in for loop :- 
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0 to 4





// using continue keyword in for loop :- 
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0, 1, 3, 4




// Reverse for lp :- 
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Output: 5, 4, 3, 2, 1






