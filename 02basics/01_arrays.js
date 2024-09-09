//array 

const myArr =[0,1,2,3,4,5,true,"harsh"]
const myhero = ["harsh", "gupta","superman"]
const myarr2 = new Array(1,2,3,4)
const numbers = [1,2,3,4]

//array methodes 

// myArr.push(6) //it adds value in start
// myArr.pop()

// myArr.unshift(0) //it adds value in start
// myArr.shift()

//imp+++++++++++++++++++++++++++++
// console.log(myArr.includes(5))
// console.log(myArr.indexOf('harsh'))



// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

//slice , splice
console.log("a",myArr);
const myn1= myArr.slice(1,3)

console.log(myn1)
console.log("b",myArr)

const myn2= myArr.splice(1,3)
console.log("c",myArr)
console.log(myn2)