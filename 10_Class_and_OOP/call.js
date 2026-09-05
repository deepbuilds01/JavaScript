function setusername(username){
    this.username = username
}

function createuserID(username, email, password){
    setusername.call(this,username) ;       // .call -> call the function
    this.email = email ;
    this.password = password ;
}

const user1 = new createuserID("DK", "deepkr556@gmail.com", 1234)
console.log(user1);
