// In JavaScript, stack and heap are two types of memory used for storing data during code execution. Understanding how they work helps in understanding performance, memory management, and bugs like memory leaks.




// 1. Stack Memory :-
/*
Used for: Storing primitive values and function calls (execution context).
Memory allocation: Fixed size, fast access (LIFO – Last In, First Out).
Examples: number, string, boolean, null, undefined, symbol, bigint.
*/

let a = 10;
let b = a;
console.log(b); // 10 → because primitives are copied by value
b = 20;
console.log(b); // 20 → because primitives are copied by value
console.log(a); // 10 → because primitives are copied by value








// 2. Heap Memory :-
/*
Used for: Storing objects, arrays, and functions (non-primitive types).
Memory allocation: Dynamic, larger, but slower to access than stack.
Stored by reference, not by value.
*/

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob" → because both refer to the same object in heap
console.log(obj2.name); // "Bob" → because both refer to the same object in heap

// Example with arrays
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 10;
console.log(arr1[0]); // 10 → because both refer to the same array in heap
console.log(arr2[0]); // 10 → because both refer to the same array in heap

// Example with functions
function greet() {
    console.log("Hello, World!");
}
let greetFunc = greet; // Function is stored in heap
greetFunc(); // Calls the function, output: "Hello, World!"
