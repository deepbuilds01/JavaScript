// //+++++++++ #1 ++++++++

// //Object litral
// const information = {
//     username : " deep kumar",
//     id : 123,
// }
// console.log(information);
// console.log(information.username);

// // Object non-literal
// const user = new Object();
// user.name = "deep kumar gupta "
// user.age = 22

// // console.log(user);
// console.log(user.name);


//+++++++++ #2 ++++++++
// this keyword
// const information = {
//     username : " deep kumar",
//     id : 123,
//     // function
//     ans(){
//         // console.log(this.username);
//         console.log(this);   // return whole object
        
//     }
// }
// console.log(information);
// information.ans()
// console.log(this);   // output {} -> becouse node enviroment is empty



// constructor function
function user(name, age){
    this.name = name ;
    this.age = age

    // return this  // ye jb use karna jb new keyword object pr nahi use kiya hoga
}
// const name1 =  user("deep kumar", 20)
const name1 = new user("deep kumar", 20)     // "new" keyword craete a new object if we can not use
console.log(name1);                          // new keyword in this case overwrite the object
console.log(name1.name);











