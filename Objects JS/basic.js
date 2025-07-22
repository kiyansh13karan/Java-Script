// Objects in JS 

/*
In JS , objects are one of the most important data types. They allow you to store collections
of data and more complex entities.
*/


/*
An object is a collection of key-value pairs, where : 
1. Keys are always string or symbol. 
2. Values can be any data types : String, number, array, function, or even another object. 
*/

// Object Literals
/*
const myobj = {
    // values
}
*/

const mySymbol = Symbol("key1") ; // creating symbol for further use in object
// Creating an Object :- 

const person = {
    name : "Karan",
    "Full name" : "Karan Nayal",
    age : 19, 
    Course : "BTech", 
    StudentId : 23011638, 
    UniversityRollNo : 2361245, 
    isStudent : true, 
    Email : "kannunayalkaran0303@gmail.com",
    WorkingDays : ["Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday"],
    [mySymbol] : "13jan", 
};

// accessing Object
console.log(person.Email) ; // dot notation for accessing values 
console.log(person["Email"]) ; // correct way is this Bracket notation for accesssing values

// if we access "full name" then we have to follw the square bracket and double quotes 
console.log(person["Full name"]) ;

// we have to make a symbol, add on object and then print it 
// creating a symbol "const mySymbol = Symbol("key1") ;"
// adding symbol in object => [mySymbol] : "13jan", 
// accessing symbol 
console.log(person[mySymbol]) ;
console.log(typeof mySymbol); // Symbol




// for changing or overwriting the values in object :- 
person.Email = "karannayalkannu1982@gmail.com" ; 

// freezing the object so that no one can change tha values in onject 
// Object.freeze(person) ; 

// now changing the value but this will not going to be changed
// person.Email = "yashprogrammer25@gmail.com" ; 

// now printing the object 
console.log(person) ;



// adding function in object :- 
person.greeting = function() {
    console.log("Hello Karan");
}

// function by refering to object value
person.greetingToo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(person.greeting());
console.log(person.greetingToo());


