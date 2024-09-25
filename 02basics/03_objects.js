// MOST IMP**********
// singleton 

//object literals

//Object.create 
const mySym = Symbol("key1")

const jsuser ={
    name : "Harsh ",
    [mySym] :"mykey1",
    age : 23,
    email : "harshgu@gmail.com",
    isloggedin : false,

}

// console.log(jsuser["name"])
// console.log(typeof jsuser[mySym])
 
// //to freez any object 

// jsuser.email = "gptbkjsjd"
// Object.freeze(jsuser)
// jsuser.email = "bhausjaskjah"
// console.log(jsuser)

//Functions

jsuser.greeting = function(){
    console.log("hello js user");
}
jsuser.greeting2 = function(){
    console.log(`Hello user , ${this.name}`);
}

console.log(jsuser.greeting())
console.log(jsuser.greeting2())