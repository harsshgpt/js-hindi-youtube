function sum(num1,num2){
    let res = num1+num2
    return res
    //to save lines we can use ++++++++++ return num1+num2 it execute same operation in single line 
}
 let result = sum(4,6)
//  console.log(result)

function justloggedin(username){
    return `${username} just logged in`
}
let name = justloggedin("harsh")
// console.log(name)


//+++++++++++++++++++   REST OPERATOR : it increases the limit to take value in function(...) not like spread operator

function cartvalue(...num){
    return num
}


//it can be done by both mekthode both are same 

// console.log(cartvalue(200,400,50,60,8,0,513,0));


//handling object via function

//creating object 
const user ={
    name : "Harsh",
    pass:"guptaji",
    code:224141
}

function handleobj(anyobject){
    console.log(`the user name is ${anyobject.name} and the code is ${anyobject.code}`)
}

// handleobj(user)
handleobj({
    name : "Harsh",
    code: 25411
})



//Now we are gonna handle array via function 

const myarray = [200,400,500,600,15,564,315]
function indexfinder(array){
    return array[2]

}
//it can be done by both mekthode both are same 
console.log(indexfinder(myarray))
console.log(indexfinder([15,25,6,45,648,85]))