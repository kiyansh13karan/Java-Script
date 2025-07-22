// For-each loop 

const coding = ["JS" , "Python" , "Cpp" , "C"]

coding.forEach( function (item) {
    console.log(item) ;
} )




// Using arrow function
const num = [1, 2, 3, 4, 5]
num.forEach( (nums) => {
    console.log(nums * 2) ;
});
// Output: 2, 4, 6






// calling function by for-each 
function printnum(nums) {
    console.log(nums) ;
}
// calling 
num.forEach(printnum)





// for-each by using more arguments
coding.forEach( (item , index , arr) => {
    console.log(item , index , arr) ;
    
})




// Storing object inside array and accesing it 
const mycoding = [
    {
        languagename : "Java Script", 
        filename : "js"
    },
    {
        languagename : "C++", 
        filename : "cpp"
    },
    {
        languagename : "Python", 
        filename : "py"
    },
]


mycoding.forEach( (item) => {
    console.log(item.languagename) ;
    
})