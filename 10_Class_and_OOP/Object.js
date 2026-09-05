function multiplyby5(num){
    return num*5
}
// your custom property
multiplyby5.string = "deep kumar";
multiplyby5.power = 5;
multiplyby5.age = 24;
multiplyby5.email = "deep@example.com";

// console.log(multiplyby5(5));       // 25
// console.log(multiplyby5.string);
// console.log(multiplyby5.power);
// console.log(multiplyby5.age);      // 24
// console.log(multiplyby5.email);    // deep@example.com




function createuser(username, score){
    this.username = username
    this.score = score
}
// apply prototype
createuser.prototype.increment = function(){
    this.score++
}
createuser.prototype.printme = function(){
    console.log(this.score);
    
}
const user1 = new createuser("deepkumar", 20)
const user2 = new createuser("deep kumar gupta", 20)

user1.printme()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of
a new JavaScript object.

A prototype is linked: The newly created object gets linked to the 
prototype property of the constructor function. This means that it 
has access to properties and methods defined on the  constructor's 
prototype.

The constructor is called: The constructor function is called with
the specified arguments and this is bound to the newly created 
object. If no explicit return value is specified from the constructor,
JavaScript assumes this, the newly created object, to be the intended
return value.

The new object is returned: After the constructor function has been
called, if it doesn't return a non-primitive value (object, array, 
function, etc.), the newly created object is returned.

*/


