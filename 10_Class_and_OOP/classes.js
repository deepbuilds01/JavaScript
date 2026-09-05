// class user{
//     // constructor
//     constructor(name, email, password){
//         this.name = name,
//         this.email = email,
//         this.password = password
//     }

//     encryptpassword(){
//         return `${this.password}`
//     }

//     changeusername(){
//         return `${this.name.toUpperCase()}`
//     }
// }
// const user1 = new user("dk", "deepkr556@gmail.com", 1234);
// // console.log(user1.encryptpassword());
// console.log(user1.changeusername());



// behind the scene

function User(name, Email, password){
    this.name = name;
    this.Email = Email
    this.password = password
}

User.prototype.encryptpassword = function(){
    return `${this.password}`
}

// User.prototype.changeusername = function(){
//     return `${this.name.toUpperCase()}`
// }

const user1 = new User("dk", "dddd",33)
console.log(user1.encryptpassword());



