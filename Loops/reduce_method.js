const mynum = [1, 2, 3, 4, 5] 

const mytotal = mynum.reduce(function (acc , curval) {
    console.log(`Accumulator value : ${acc} and Current value : ${curval}`) ;
    
    return acc + curval
}, 0)

console.log(mytotal) ;




// Example 2 :- 

const shoppingcart = [
    {itemname : "JS course", 
        price : 999
    }, 
    {itemname : "Python course", 
        price : 4999
    }, 
    {itemname : "Data Science course", 
        price : 5299
    }, 
    {itemname : "App Dev. course", 
        price : 12999
    }, 
    {itemname : "Web Dev. course", 
        price : 3999
    }, 
    {itemname : "DSA course", 
        price : 999
    }, 
]

const total_cart_price = shoppingcart.reduce( (acc , item) => acc + item.price , 0)
console.log(`Price to pay for total cart item : ${total_cart_price}`) ;
