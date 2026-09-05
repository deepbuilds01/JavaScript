class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const user1 = new User("deepkr556@gmai.com", "sdfw")
console.log(user1.password);
