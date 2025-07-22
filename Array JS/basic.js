// Array in Java Script :- 

/*
in js , an array is a special variable that can hold multiple values at once.
JavaScript arrays are resizable and can contain a mix of different data types.
*/





// Using square brackets (most common)
let fruit = ["Apple", "Banana", "Mango"];
// Using the Array constructor
let number = new Array(1, 2, 3, 4);
// Empty array
let emptyArray = [];

// accessing array elements
console.log(fruit[0]); // "Apple"
console.log(fruit[2]); // "Mango"






// array methods :- 
/*
| Method       | Description                      | Example                               |
| ------------ | -------------------------------- | ------------------------------------- |
| `push()`     | Adds to the end                  | `fruits.push("Orange")`               |
| `pop()`      | Removes from the end             | `fruits.pop()`                        |
| `shift()`    | Removes from the beginning       | `fruits.shift()`                      |
| `unshift()`  | Adds to the beginning            | `fruits.unshift("Kiwi")`              |
| `indexOf()`  | Finds index of a value           | `fruits.indexOf("Banana")`            |
| `includes()` | Checks if value exists           | `fruits.includes("Apple")`            |
| `join()`     | Joins elements into a string     | `fruits.join(", ")`                   |
| `slice()`    | Returns part of array            | `fruits.slice(1, 3)`                  |
| `splice()`   | Adds/removes elements            | `fruits.splice(1, 1)`                 |
| `forEach()`  | Loops through array              | `fruits.forEach(f => console.log(f))` |
| `map()`      | Creates a new array from results | `numbers.map(n => n * 2)`             |
| `filter()`   | Filters array based on condition | `numbers.filter(n => n > 2)`          |
*/


let fruits = ["Apple", "Banana", "Mango"];
let numbers = [10, 20, 30, 40, 50];

// push() – Add to the end
fruits.push("Orange");
console.log("After push:", fruits); // ["Apple", "Banana", "Mango", "Orange"]

// pop() – Remove from the end
fruits.pop();
console.log("After pop:", fruits); // ["Apple", "Banana", "Mango"]

// shift() – Remove from the beginning
fruits.shift();
console.log("After shift:", fruits); // ["Banana", "Mango"]

// unshift() – Add to the beginning
fruits.unshift("Kiwi");
console.log("After unshift:", fruits); // ["Kiwi", "Banana", "Mango"]

// indexOf() – Find index of an element
console.log("Index of 'Banana':", fruits.indexOf("Banana")); // 1

// includes() – Check if element exists
console.log("Includes 'Apple'?", fruits.includes("Apple")); // false

// join() – Join elements into a string
console.log("Joined fruits:", fruits.join(" - ")); // "Kiwi - Banana - Mango"

// slice() – Get part of the array (non-destructive)
let sliced = fruits.slice(1, 3);
console.log("Sliced fruits:", sliced); // ["Banana", "Mango"]

// splice() – Add/Remove elements (destructive)
fruits.splice(1, 1, "Grapes"); // Remove 1 element at index 1 and add "Grapes"
console.log("After splice:", fruits); // ["Kiwi", "Grapes", "Mango"]

// forEach() – Loop through array
console.log("Using forEach:");
fruits.forEach(function(fruit, index) {
    console.log(index + " => " + fruit);
});

// map() – Create a new array
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled); // [20, 40, 60, 80, 100]

// filter() – Filter elements based on condition
let greaterThan25 = numbers.filter(n => n > 25);
console.log("Numbers > 25:", greaterThan25); // [30, 40, 50]

// concat() - merge two array and return a new array 
const newarray = fruits.concat(numbers)
console.log("New array after concatenation :- " , newarray)

// spread operator :- (...)
const new_array = [...fruits , ...numbers]
console.log("New array after spread operator :- " , new_array) ; 

// Flat() - returns a new array with all sub-array elements concatenated into it recursively up to the specified depth 
const another_array = [2, 3, 4, [5, 6], 9, [10, 11, [12, 23]]]
const new_another_array_with_flat_method = another_array.flat(Infinity)
console.log("New array afer flat methd :- ", new_another_array_with_flat_method) ;

// making array from multiple variables 
let score1 = 100 ; 
let score2 = 200 ; 
let score3 = 300 ; 
let score4 = 400 ; 
let score5 = 500 ; 
let score6 = 600 ; 
console.log(Array.of(score1 , score2 , score3 , score4 , score5 , score6)) ; 

/*
difference between slice and splice is : 
in slice original array remain same after applying slice 
but in splice the subarray removes from the originl array 
*/
