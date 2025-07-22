// Date in java Script :- 

let mydate = new Date() 

console.log(mydate.toString()) ; 
console.log(mydate.toDateString()) ;
console.log(mydate.toLocaleDateString()) ; 
console.log(mydate.toLocaleString()) ; 
console.log(mydate.toJSON()) ; 

console.log(typeof mydate) ; // object 


let mycreateddate = new Date(2025 , 0 , 13 , 5 , 30) // months are indexed from zero in js 
// arguments --> (2025-year) , (0-month) , (13-date) , (5-hour) , (30-minute)
console.log(mycreateddate.toLocaleString()) ; 


// in format of yy-mm-dd
let mycreateddate2 = new Date("2025-01-13")
// in yy-mm-dd or in string format month index is started from 1 
console.log(mycreateddate2.toLocaleString()) ; 



// in india we follow mm-dd-yy format 
let indiadate = new Date("01-13-2025") ;
console.log(indiadate.toLocaleString()) ;  





// Time in js 
let mytimestamp = Date.now() ; 
console.log(mytimestamp) ; 
console.log(indiadate.getTime()) ;


let newdate = new Date() ; 
console.log(newdate.getTime()) ; 
console.log(newdate.getFullYear()) ; 
console.log(newdate.getMonth() + 1) ; // +1 bcoz of indexing starts from zero  
console.log(newdate.getDate()) ; 
console.log(newdate.getHours()) ; 
console.log(newdate.getMinutes()) ; 
console.log(newdate.getSeconds()) ; 
