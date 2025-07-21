// Strings in Java Script


const name1 = "Karan" ;
const course = "B.Tech" ; 
console.log(`My name is ${name1} and I am pursuing ${course}`); 
// Output: My name is Karan and I am pursuing B.Tech

const gamename = new String("Kannu")
console.log(gamename); // Output: [String: 'Kannu'] (String object)

// Creating a string
let str1 = "Hello, World!";
let str2 = 'Hello, World!';
let str3 = `Hello, World!`; // Template literals

console.log(str1); // Output: Hello, World!
console.log(str2); // Output: Hello, World!
console.log(str3); // Output: Hello, World!

// String concatenation
let str4 = str1 + " How are you?";
console.log(str4); // Output: Hello, World! How are you?

// String length
console.log(str1.length); // Output: 13

// Accessing characters in a string
console.log(str1[0]); // Output: H
console.log(str1.charAt(0)); // Output: H



// String methods
// 1. toUpperCase and toLowerCase
console.log(str1.toUpperCase()); // Output: HELLO, WORLD!
console.log(str1.toLowerCase()); // Output: hello, world!

// 2. indexOf and lastIndexOf
console.log(str1.indexOf("World")); // Output: 7 (first occurrence)
console.log(str1.lastIndexOf("o")); // Output: 8 (last occurrence)

// 3. substring and slice
console.log(str1.substring(0, 5)); // Output: Hello
console.log(str1.slice(7, 12)); // Output: World
console.log(str1.slice(-6)); // Output: World! (negative index)
console.log(str1.slice(0, -7)); // Output: Hello, (removes last 7 characters)

// 4. replace
let str5 = str1.replace("World", "JavaScript");
console.log(str5); // Output: Hello, JavaScript!

// 5. split
let str6 = "apple,banana,cherry";
let fruits = str6.split(",");
console.log(fruits); // Output: ["apple", "banana", "cherry"]
console.log(typeof fruits); // Output: "object" (arrays are considered objects in JavaScript)

// 6. trim
let str7 = "   Hello, World!   ";
console.log(str7.trim()); // Output: "Hello, World!"

// 7. includes
console.log(str1.includes("World")); // Output: true
console.log(str1.includes("JavaScript")); // Output: false

// 8. startsWith and endsWith
console.log(str1.startsWith("Hello")); // Output: true
console.log(str1.endsWith("!")); // Output: true
console.log(str1.endsWith("World!")); // Output: false
console.log(str1.startsWith("World", 7)); // Output: true (starts with "World" at index 7)
console.log(str1.endsWith("World", 12)); // Output: true (ends with "World" at index 12)

// 9. repeat
let repeatedStr = "Hello! ".repeat(3);
console.log(repeatedStr); // Output: "Hello! Hello! Hello! "

// 10. template literals
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: "Hello, Alice!"

// 11. escaping characters
let escapedStr = "He said, \"Hello!\"";
console.log(escapedStr); // Output: He said, "Hello!"   

// 12. raw strings
let rawStr = String.raw`C:\Users\Alice\Documents`;
console.log(rawStr); // Output: "C:\Users\Alice\Documents"

// 13. String.fromCharCode
let charCodeStr = String.fromCharCode(72, 101, 108, 108, 111);
console.log(charCodeStr); // Output: Hello (72 = H, 101 = e, 108 = l, 108 = l, 111 = o)

// 14. String.prototype.valueOf
let valueOfStr = str1.valueOf();
console.log(valueOfStr); // Output: Hello, World!

// 15. String.prototype.localeCompare
let compareStr1 = "apple";
let compareStr2 = "banana";
console.log(compareStr1.localeCompare(compareStr2)); // Output: -1 (apple comes before banana)

// 16. String.prototype.match
let matchStr = "The rain in Spain stays mainly in the plain.";
let regex = /ain/g;
let matches = matchStr.match(regex);
console.log(matches); // Output: ["ain", "ain", "ain", "ain"]

// 17. String.prototype.search
let searchStr = "The quick brown fox jumps over the lazy dog.";
let searchIndex = searchStr.search("fox");
console.log(searchIndex); // Output: 16 (index of "fox")

// 18. String.prototype.split
let splitStr = "one,two,three,four";
let splitArray = splitStr.split(",");
console.log(splitArray); // Output: ["one", "two", "three", "four"]

// 19. String.prototype.endsWith
let endsWithStr = "Hello, World!";
console.log(endsWithStr.endsWith("World!")); // Output: true
console.log(endsWithStr.endsWith("!")); // Output: true

// 20. String.prototype.startsWith
console.log(endsWithStr.startsWith("Hello")); // Output: true   
console.log(endsWithStr.startsWith("World", 7)); // Output: true (starts with "World" at index 7)
