const nums = [1,2,3,4,5,6,7,8,9,10]
// const print = nums.map( (num) =>  num*10)
// console.log(print);


// ++++++++++++++++== Chaning
const print = nums
                .map( (num) => num*2 )
                .map( (num) => num*10)
                .filter( (num) => num>=100)
console.log(print);

