const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const newnums1 = mynums.filter( (num) => {
    return num > 4
}) 
console.log(newnums1) ;




// using for each 
const newnums2 = []

mynums.forEach( (num) => {
    if(num > 4) {
        newnums2.push(num)
    }
} )
console.log(newnums2) ;



console.log("\n\n") ;




// Example on more concept of filters
const books = [
    {title : 'Book one' , genre : 'Fiction' , publish : 2000 , edition : 2004} , 
    {title : 'Book Two' , genre : 'Non-Fiction' , publish : 1980 , edition : 2006} , 
    {title : 'Book Three' , genre : 'Science' , publish : 1945 , edition : 1980} , 
    {title : 'Book Four' , genre : 'History' , publish : 1950 , edition : 1988} , 
    {title : 'Book Five' , genre : 'Mathematics' , publish : 1999 , edition : 2001} , 
    {title : 'Book Six' , genre : 'Geography' , publish : 2000 , edition : 2009} , 
    {title : 'Book Seven' , genre : 'Hindi' , publish : 1930 , edition : 1947} , 
    {title : 'Book Eight' , genre : 'Novel' , publish : 1885 , edition : 1895} , 
    {title : 'Book Nine' , genre : 'Sanskrit' , publish : 2010 , edition : 2015} , 
]; 

let userbooks = books.filter( (bk) => bk.genre === 'History')

userbooks = books.filter( (bk) => {
    return bk.publish >= 2000
})

console.log(userbooks) ; 