class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username ${this.username.toUpperCase()}`)
    }

    static createid(){ // after using static any function could not access this 
       return 123
    }
}