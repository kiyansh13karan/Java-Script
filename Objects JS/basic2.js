// Singleton Object

const person = {}

person.name = "Karan" 
person.Id = "23011638" 
person.isLoggedIn = false 


console.log(person);


// making another object 
const secondperson = {
    email : "karannayalkannu0303@gail.com",
    fullname : {
        userfullname : {
            firstname : "Karan",
            lastname : "Nayal",
        } 
    }
}

console.log(secondperson.fullname.userfullname);




// merging two objects 
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"} 

const obj3 = Object.assign({} , obj1 , obj2) // Object.assign(target , source)
console.log(obj3) ;

// merging objects using spreaad operator (...)
const obj4 = {...obj1 , obj2} 
console.log(obj3) ;



/// takng keys and values from object
console.log(Object.keys(person)) ;
console.log(Object.values(person)) ;
console.log(Object.entries(person)) ;
