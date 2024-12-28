// // const arr = [2,4,6,5,8,4,7,3,13,2]

// // arr.forEach(function (i) {
// //     console.log(i);
// // })

// // const great = arr.filter((num) => num>8 )
// // console.log(great)

// // const great = arr.filter((num)=> {           //After opening scope we have to make sure to put return key word
// //     return num>5  
// // })
// // // console.log(great);

// const arr = [2,4,6,5,8,4,7,3,13,2]

// const newnums = []

// arr.filter((num)=> {
//     if (num>4){
//         newnums.push(num)
//     }
// })

// console.log(newnums)

//.reduce use like it has accumulator it used to take sum of all
 
const shoppingcart = [
    {
     corse : "py",
     price : 2000,
    },

    {
    corse : "js",
    price : 999,
    },

    {
    corse : "java",
    price : 8000,
    }
]
//.reduce uses the accumulator which helps him to calculate the things
const total = shoppingcart.reduce((acc , shoppingcart)=>acc + shoppingcart.price ,0) //acc+shoppingcart.price = acc but intial time acc = initilized value which is here 0 

console.log(total)