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
// console.log(user()); // if you can not pass the argument the output is "undefine"



// function calculateCardPrice(...num1){
//     return num1;
// }
// console.log(calculateCardPrice(100,234,234,234)); // all the number store in array
//+++++++++++++++++ OR
function calculateCardPrice(price1, price2,...num1){
    return num1;
}
console.log(calculateCardPrice(100,234,234,234)); //  ( price1->100, price2->234, num1->[234,234])



//++++++++++++++++ how to pass the object in a function

// Object 
const Userss= {
    Username : "DK",
    price : 999
}
// Function 
function HandleObject(anyobject){
    console.log(`the user name is ${anyobject.Username} and price is ${anyobject.price} `);
}
HandleObject(Userss)

// example 2 using arrays
// Array Declration
const arr = [100,200,300,400,500];
// function 
function returnvalue(getarray){
    return getarray[0]
}
console.log(returnvalue(arr));

