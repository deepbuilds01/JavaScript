
// Scopes -> where can i access the variable in my code

// global scope -> a variable declared outside any function
let name = "deep"
function info(){
    console.log(name);
}
// info()

// Function scope -> A variable declared inside the function 
function result(){
    let marks = 86
    console.log(marks);
}
// result()
// console.log(marks);  // output -> marks is not defined (but we can not access the marks variable value outside the function)


// Block scope
if(true){
    let a =10
    let b = 20
    // console.log(a);
}



//++++++++++++++ Nestest Function
function One(){
    const teacher = "hitesh "
    function Two(){
        const student = "DK"
        console.log(teacher);
    }
    // console.log(student); // they give error becouse the scope of the variable only inside the function two
    Two()
}
// One()

//+++++++++++ Nexted if condition
if(true){
    const num = 10;
    if(true ){
        const num2 = 20
        // console.log(num);
    }
    // console.log(num2);    // error
} 
// console.log(num); // error



//+++++++++++++++++ Important information

// Method -> 1 (Function Declaration)
console.log(addone(6));   // 7
function addone(num){
    return num+1
}


// Methode -> 2 (function declration)
// console.log(addtwo(10))       // error ( Cannot access 'addtwo' before initialization in declration method two)
const addtwo = function(num){
    return addtwo+2
}
