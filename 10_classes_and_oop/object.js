function Setusername(username){
    this.username = username;
}

function user (username,email,pass){
    Setusername.call(this,username)
    this.email = email;
    this.pass = pass;
}

const use = new user("Harsh","harsh@google.com",123)
console.log(use)