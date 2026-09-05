// Object.getOwnPropertyDescriptor() is a JavaScript method used to 
// check the properties of a specific property inside an object.

// It tells you things like:

// * What is the property’s value?
// * Can we change it? → writable
// * Can we delete/change its descriptor? → configurable
// * Does it appear in loops like for...in? → enumerable
// * Is it a getter/setter?



// console.log(Math.PI);
Math.PI = 5
// console.log(Math.PI);         // why the value of pi is not change 


const discripter = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(discripter);



const User = {
    name : "deep kumar",
    email : "deepkr556@gmail.com",
    password : " 123"
}
// // console.log(User);   

// // Mai chhta hu ki mera naam  ko koi change na kar ske
// // (Important) GetOwnPropertyDescriptor() only reads/checks the property. It does not modify it.
// // (Important) You need Object.defineProperty() to change writable.

// Make name unchangeable
Object.defineProperty(User, "name",{
    writable : false,
    enumerable : false,
    configurable : false
})
// // User.name = "harshit"
// // console.log(User);

// // Enumerable
// for (const key of Object.entries(User)) {
//     // console.log( `${key}`);
// }

// // delete the name
delete User.name

console.log(User);


 



