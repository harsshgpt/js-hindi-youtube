const myarr = [1,2,3,4,5];
// myarr.push(1,2,3,5);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);
myarr.unshift(15);
console.log(myarr);
myarr.shift()
console.log(myarr);
/* .includes - checks presence of that element and give boolean answer like true or false
    .indexof - check the index of value in arry
    .join - covert int in string by combinng those valiue */



    //slice and splice 
const arr2 = [2,4,5,6,7,8,9];
let arr3 = arr2.slice(1,4);   // it take 1 to 3 value
console.log(arr3);

const arr4 = [2,4,5,6,7,8,9];
let arr5 = arr2.splice(1,4); // it takes whole inserted value
console.log(arr5);