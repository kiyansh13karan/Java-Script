// Arrow function 

/*
Arrow functions are a shorter syntax for writing functions introduced in ES6 (ECMAScript 2015). They are especially useful for concise function expressions and preserve the this context from their surrounding scope.
*/


// Syntax :- 
/*

const functionName = (parameters) => {
  // function body
};

*/


const greet = () => {
  console.log("Hello Karan!") ;
  console.log(this) ;
  
} 
greet(); // Hello!





// ARROW FUNCTION :- 
const addTwo = (num1 , num2) => {
    return num1+num2 ; 
}
console.log(`Sum : ${addTwo(4,3)}`) ;
 


// arrow function with implicit return 
const mulTwo = (num1 , num2) => (num1*num2) 
console.log(`Multiply : ${mulTwo(3 , 4)}`) ;



// Returning an Object :- Use parentheses to return an object:
const getUser = () => ({ name: "Karan", age: 19 });
console.log(getUser()); // { name: "Karan", age: 19 }






// This Difference Example :- 
const person = {
  name: "Karan",
  greet: function () {
    console.log("Hello, " + this.name); // works
  },
  greetArrow: () => {
    console.log("Hello, " + this.name); // undefined
  }
};

person.greet();      // Hello, Karan
person.greetArrow(); // Hello, undefined (because `this` is not bound to the object)
