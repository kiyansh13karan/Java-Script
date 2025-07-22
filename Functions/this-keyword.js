// THIS keyword :- 

/*
In JavaScript, the this keyword refers to the object that is currently executing the code. Its value depends on how a function is called, not where it's defined.
*/



// This keyword in object 
const person = {
    name : "Karan",
    Id : "23011638",

    welcomemessage : function() {
        console.log(`${this.name}, Good Morning.`) ; 
        console.log(this) ;
        
    }
}
person.welcomemessage()
person.name = "Kiyansh" 
person.welcomemessage()

console.log(this)