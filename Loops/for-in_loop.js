// For-in Loop 

/*
The for...in loop is used to iterate over the keys (property names) of an object or an array index.



Syntax :- 

for (let key in object) {
  // code using object[key]
}

*/






// Loop through an object 
let person = {
  name: "Karan",
  age: 20,
  city: "Haldwani"
};

for (let key in person) {
  console.log(key + " : " + person[key]);
}




// Loop through an array :- (Return indexes)
let colors = ["red", "green", "blue"];


for (let index in colors) {
  console.log(index, colors[index]); // this will print index and keys both 
}
for (let key in colors) {
  console.log(colors[key]); // this will print only keys
}




// Note :-  Don’t use for...in on Maps, Sets, or class instances — use for...of for them.