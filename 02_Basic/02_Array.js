const arr1 = [1,2,3,4,5]
// console.log(arr);

const arr2 = [6,7,8,9,0]
// console.log(arr1);


// arr1.push(arr2)
// console.log(arr1);                   // [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 0 ] ]
// console.log(arr1[5][0])              // 


// const arr3 = [4,2345,3245,3245,2345,345]
// console.log(arr1.concat(arr3));      // [ 1, 2, 3, 4, 5, 4, 2345, 3245,3245, 2345,  345]
                // OR
const allnumber = [...arr1,...arr2]
// console.log(allnumber)                  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var arr4 = [34,515,1453,3415,1345,1345,15]

var finalnumber = [...arr1,...arr2,...arr4]
// console.log(...arr1,...arr2,...arr4);       // 1 2 3 4 5 6 7 8 9 0 34 515 1453 3415 1345 1345 15
// console.log(finalnumber);                   // [1 2 3 4 5 6 7 8 9 0 34 515 1453 3415 1345 1345 15]



// how to convert nested array into single array (using flat function)
var nested_array = [332,234,45,542,[2345,2345,3542,[435,34,23,432,32]],2435435,[234525]]
var final_nested_array = nested_array.flat(Infinity)        
// console.log(final_nested_array);         // [ 1, 2,  3,  4,  5, 6, 7,  8, 9,  0, 34, 515, 1453, 3415, 1345, 1345, 1 ]



console.log(Array.isArray("deep kumar"));     // false -> becouse this is a string
// how to any datatyoe into Array
console.log(Array.from("Deep kumar"));       // ['D', 'e', 'e', 'p',' ', 'k', 'u', 'm','a', 'r]
console.log(Array.from({name:"deep kumar"})) // []     (Empty Array)     // interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]




/*
from,
of
isArray
 */