/* Object -> 

Object ->   In JavaScript, an object is a collection of key-value pairs.
            *  Keys are called properties.
            *  Values can be strings, numbers, arrays, functions, or even other objects.

*/


// this is a Non-Singleton object 

const userinformation = {
    name : "deep kumar",           // key is bydefoult String  like name , ID and number
    "Fullname" : "kjsadfj",        // do not access  this key using normal function call like this (console.log(userinformation.fullname); )
    ID : "deepkr556@gmail.com",
    number : 8506835016
}
// console.log(userinformation);                      // { name: 'deep kumar', ID: 'deepkr556@gmail.com', number: 8506835016 }
// console.log(userinformation.name)                  // deep kumar
           //  OR 
////console.log(userinformation[name]);   // wrong method
// console.log(userinformation["name"]);     // correct way (because key is a String)
// console.log(userinformation["Fullname"]); 





// const mysym = Symbol("mysymbol")
// const information = {
//     [mysym] : "noathig2" ,
//     imail : "deepkr556@gmail.com"
// }
// console.log(information[mysym])       //anthing2
// console.log(mysym);                   // mysymnol


// ********************* Freeze function ******************** //
// const mysym1 = Symbol("asdf")
// const info = {
//     [mysym1] : "noathig2" ,
//     Email : "deepkr556@gmail.com"
// }
// console.log(info);                       // { Email: 'deepkr556@gmail.com', Symbol(asdf): 'noathig2' }
// info.Email = "deepkumar@gmail.com"
// console.log(info);      

// Object.freeze(info)                      // f

// info.Email = "sadgfasfgasf"
// console.log(info);   


//**************** fuction ******************** */


const user = {
    name : "deep kumar",           // key is bydefoult String  like name , ID and number
    "Fullname" : "kjsadfj",        // do not access  this key using normal function call like this (console.log(userinformation.fullname); )
    ID : "deepkr556@gmail.com",
    number : 8506835016
}

// fuction
user.greeting = function(){
    console.log("jashgas");
}
user.greetingTwo = function(){
    console.log(`hello user  ${this.name}`);
    console.log(`hello user, ${this.user}`);
    
}
// console.log(user.greeting);             //  [Function (anonymous)]
// console.log(user.greeting());              //  undefine  

console.log(user.greeting());
console.log(user.greetingTwo());

















 













