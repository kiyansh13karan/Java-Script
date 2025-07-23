// Map in js 
 

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums1 = mynums.map( (num) => num+10)
const newnums2 = mynums.map( (num) => {return num+10})


console.log(newnums1) ;
console.log(newnums2) ;


// chaining in map 
const newnums3 = mynums
                    .map( (num) => num*10)
                    .map( (num) => num+1)
                    .filter( (num) => num >= 40)
// map me chaining kr skte hai aur sth hi hum multiple map use kr skte hai aur uske sth filter bhi 
// chaining me original data nhi aata hai jo upr se pass hota hai vhi niche ko data aata hai 
console.log(newnums3) ;
