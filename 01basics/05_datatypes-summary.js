// there are two kind of data types (Primitive & non primitive)
//typeof null = object

//Primitive
     // 7 category : string , Number , boolean , null  , undefined , Symbol , BigInt

const score = false
const id = Symbol('123')

//Refrece Type  (Non - primitive)
    // array , objects , functions

constmyFunction = function(){
     console.log("helo world")
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory types
//stack memory(primitive)(copy)
//heap memory(non primitive)(refrence)

let myYoutubename ="harsh"
let temp = myYoutubename;
temp = "chai lelo"
console.log(temp)
console.log(myYoutubename)
let userone={
    email: "harsh.com",
    upi : "fshdifhsd"
}
console.log(userone.email)