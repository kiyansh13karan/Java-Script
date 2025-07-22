// Functions in java Script :- 

/*
In JavaScript, functions are blocks of reusable code that perform a specific task. They're fundamental to writing efficient and organized code.
*/


// creating a function 
function nameprinting() {
    console.log("K") ;
    console.log("A") ;
    console.log("R") ;
    console.log("A") ;
    console.log("N") ;
}
nameprinting() ; 





// function to add two numbers 
function addTwoNumber(number1 , number2) {
    console.log("Sum of two number is : " , number1 + number2) ;
}
addTwoNumber(5 , 9) ; 



// funcction to multiply two numbers 
function multiplyTwoNumber(number1 , number2) {
    return number1*number2 ; 
}
result = multiplyTwoNumber(5,6) ; 
console.log(`Multiplicaton of two number is : ${result}`) ;




// Rest operator in function (ex :- cart in shopping apps)
function CalculateCartPrice(...num1) {
    return num1 ; 
}
console.log(CalculateCartPrice(200 , 300 , 400 , 500)) ;





// Objects in function 
const person = {
    name : "Karan",
    studentid : "23011638"
}
function handleObject(myobj) {
    console.log(`Student name is ${myobj.name} and Student Id is ${myobj.studentid}`) ;
}
handleObject(person)




// array in function 
const mynewarray = [200 , 300 , 400 , 500] 
function returnsecondvalue(getarray) {
    return getarray[2] ; 
}
console.log("Second value from the array is : " , returnsecondvalue(mynewarray)) ;