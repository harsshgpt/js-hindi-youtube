//baby(block scope) can ask icecream with dad (global) but dad can't ask to baby 
//global scope  (outside portion of block scope) 
//block scope  (if(){}<-this scope is called block scope 

//due to block scope issue we dont use var

// var a =300 //it is in global scope
// if(true){//here bolck scope  starts
//     var a = 10      //output will be 10 this is the problem of var or if we take input without let and const like    c= 5 it plays same roll as var
// }
// console.log(a);

//when we run anu command thorugh console and via node both are diffrent scope  




//++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++=

//WE CAN DEFINE TWO TYPES OF FUNCTION LIKE 

function addone(num){  //it is normal function
    return num+1
}
addone(5)

const twoadd = function addtwo(num){   //it is expression function
    return num+2
}
addtwo(5)