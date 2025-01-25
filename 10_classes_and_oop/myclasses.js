// class user{
//     constructor(username,email,pass){
//         this.username = username ;
//         this.email = email;
//         this.pass = pass;
//     }
//     encryptPassword(){
//         return(`${this.pass}abc`)
//     }

//     useruppercase(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const persone = new user("harsh","harsh@gmail.com",123);
// console.log(persone.encryptPassword())
// console.log(persone.useruppercase())


//Behind the scene 

function user (username , email ,pass){
    this.username = username ;
    this.email = email;
    this.pass = pass;
}

user.prototype.encrptpass= function(){
    return `${this.pass}abc`
}

user.prototype.upper = function(){
    return `${this.username.toUpperCase()}`
}

const name = new user("Harsh","harsfahsh",1215)

console.log(name.encrptpass())
console.log(name.upper())

