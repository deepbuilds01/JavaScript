function name(){
    console.log("DK");
    console.log("DK");
    console.log("DK");
    console.log("DK");
    console.log("DK");
    console.log("DK");
}

// name   // referense
// name() // execution


function twosum(num1, num2){
    console.log(num1+num2);
}
// twosum()      // funtion call output is NaN
// twosum(10,10) // 20
// twosum(10,"132") // 10132
// twosum(10,null)  // 10
// const result = twosum(50,50)
// console.log(result);    // undefined becouse the function are print the sum not return

function multi(num1, num2){
    let ans = num1*num2
    return ans
}
// console.log(multi(3,3));
const result1 = multi(3,10)
// console.log(result1);


//+++++++++ basic if else
function user(username){                   
    if(username === undefined){
        console.log("pls enter the username");
        return
    }
    return  `${username} justlogged in`
}
console.log(user()); // if you can not pass the argument the output is "undefine"





