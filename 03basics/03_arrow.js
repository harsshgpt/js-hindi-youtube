// const name = function(){
//     console.log(this)
// }
//  name()



// function name (){
//     console.log(this)
// }
// name()




//arrow function  () => {} simply it is arrow function

// const chai = ()=>{
//     let username = "harsh"
//     console.log(this)
// }
// chai()


//basic arrow function 

// const addition = (a,b) => {     //it is also called explecit return because we had to write an return
//     return a+b
// }
// console.log(addition(3,4))


//imlicit return
// const addition = (a,b) => a+b  
const addition = (a,b) => (a+b)  //no return needed
console.log(addition(3,4))
