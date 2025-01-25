class user{
    constructor(username){
        this.username = username 
    }
}

class teacher extends user{
    constructor(username,email,pass){
        super(username)
        this.email = email
        this.pass = pass

    }
    adcourse(){
        console.log(`A new course is added by ${this.username.toUpperCase()}`)
    }
}

const chai = new teacher("harsh","harsh@gmail",123)

console.log(chai.adcourse())

