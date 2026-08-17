// reduce 

const nums = [1,2,3]

// const print = nums.reduce(function num(accumulator, currentval){
//     console.log(`acc :  ${accumulator} and ${ currentval}`);
//     return accumulator+currentval
// }, 0)

// using arrow function
// const print = nums.reduce( (accumulator, currentval) => {
//     return accumulator+ currentval
// }, 0)
//+++++++++++++ OR 
const print = nums.reduce((accumulator, currentval) => accumulator + currentval , 0 )
console.log(print )



//+++ Example of reduce 
const shoopingCard = [
    {
        shoppingitem : "Rice ",
        price : 299
    },
    {
        shoppingitem : "Snacks",
        price : 199
    },
    {
        shoppingitem : "Atta ",
        price : 599
    },
]
const total = shoopingCard.reduce( (accumulator ,item ) => item.price + accumulator , 0 )
console.log(total);
