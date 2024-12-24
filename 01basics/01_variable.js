/*
Imagine a house with rooms (blocks):
Each room in the house has its own objects (variables).
You can only use an object inside the room where it's kept. Once you leave the room, you can't access it anymore.

A block in JavaScript is like a room. It is defined by {} (curly braces).
Variables declared with let or const are like objects in the room:
You can only use them inside the {} block where they were declared
*/
const accountId = 144553
let accountEmail = "harshgupta@gmail.com"
var accountPassword = " 1523546"
accountcity = "jaipur"
let accountState;

accountEmail = "ahgsjags@kjakljsla"
accountPassword = " 222222"
accountcity = "ttttt"
// accountId = 2
console.log(accountId);

/*
Don't use var as a variable name
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountcity,accountState])
