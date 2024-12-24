const marvel_heros= ["spiderman" , "thor", "capitan_america", "ironman"];
const dc = ["superman","batman","flash"];
// let names = marvel_heros.concat(dc);

// console.log(names);
 
//spread operator
const allnew = [...marvel_heros,...dc]; //(2 glass are broken and merged)
console.log(allnew);

const new1 = [1,2,5,4,8,[8,9,5,465,56,1]];
const twt = new1.flat(Infinity) //.flat is used to merge array in array problem to make a sngle array by defining its depth (infinty is hack)
console.log(twt);


//to check any data typeis array or not 

//+++++++++++++INTERVIEW+++++++++++++++++

console.log(Array.isArray("hitesh")); //isarray is used to check array is available or not
console.log(Array.from("hitesh"));   //.from is used to creat an array  (WE CAN USE .OF ALSO)
console.log(Array.from({name : "hitesh"})); //if it could not create an array it will return brackates

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));