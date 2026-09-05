let myname = "deep kumar"
// console.log(myname.length);     // 10
// console.log(myname.trim().length);// 1trim() → removes spaces at start and end
// console.log(myname.replace(" ",""));
// console.log(myname.replace(" ","").length);


// let name = "deep kumar"
// console.log(name.truelength); // undefined

const myhero = ['thor','spider']
const heropower = {
    thor : "hummer",
    spider : "sling",
    spiderpower : function(){
        console.log(this.spider);
    }
}
Object.prototype.hitesh = function(){
    console.log("I am DK !");
}
Array.prototype.addinmyhero = function(){
     console.log("DK!");
}

// heropower.hitesh();
// heropower.addinmyhero()    // error accure becouse Array is a built-in JavaScript object/function used to create arrays.
// myhero.addinmyhero()
// myhero.hitesh()




// inheritance -> this inheritance syntex is old

const Teacher = {
    tname : " hitesh",
    sub : "JS"
}
const user = {
    name : "DK",
    id : 12345,
    // __proto__ : Teacher       // inheritance 
}

// console.log(user);
// Teacher.__proto__ = user;        // inheritance
// console.log(Teacher);


// mordern inhertance syntax

const pro = Object.setPrototypeOf(Teacher,user)
// console.log(user);


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


