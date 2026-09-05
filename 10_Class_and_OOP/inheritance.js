class user {
    constructor(username ) {
        this.username = username
    }
    logme(){
        console.log(`${this.username}`);
        
    }
}
class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcouse(){
        console.log(`add new course is add by ${this.username}`);
        
    }
}

const chai = new Teacher("chai ", "chai@gmail.com", 123)
chai.addcouse();