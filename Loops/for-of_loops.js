// For-of Loop 

/*
for...of Loop in JavaScript
The for...of loop is used to iterate over iterable objects like:
Arrays
Strings
Maps
Sets
NodeLists (in DOM)

It provides a clean and simple way to loop through values.





Syntax :- 

for (let item of iterable) {
  // code using item
}

*/



// For loop throughh an array :- 
let colors = ["red", "green", "blue"] ;

for (let color of colors) {
  console.log(color) ;
}




// Loop through a string (Character by character)
let word = "JavaScript" ;

for (let char of word) {
  console.log(char) ;
}



// Loop through a set 
let numbers = new Set([1, 2, 3]) ;

for (let num of numbers) {
  console.log(num) ;
}





// Loop through a map :- 
let student = new Map() ;
student.set("name", "Karan") ;
student.set("age", 19) ;

for (let [key, value] of student) {
  console.log(`${key} : ${value}`) ;
}




/*
When to use for-of 

| Use `for...of` with  | Why                                |
| -------------------- | ---------------------------------- |
| Arrays               | Clean syntax, avoids indexing      |
| Strings              | Loop through characters easily     |
| Sets & Maps          | Automatically handles values/pairs |
| `Object.values(obj)` | To loop object values safely       |

*/
