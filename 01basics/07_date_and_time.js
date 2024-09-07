let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // the type of date is OBJECT

//+++++++++++++++++++++++++++++++ these are the outputs ++++++++++++++++++++++++
// Sat Sep 07 2024 19:50:38 GMT+0000 (Coordinated Universal Time)
// Sat Sep 07 2024
// 2024-09-07T19:50:38.424Z
// 2024-09-07T19:50:38.424Z
// 9/7/2024, 7:50:38 PM

let myCreatedDate = new Date (2024,11,12); //moths start in js from 0-11
console.log(myCreatedDate.toDateString());

//in this methode we are gonna create a date an d time both methode by which we are gonna make or diffrentiate date and time via (toLocalString())

// let mydateandtime = new Date ("2023-01-15");
let mydateandtime = new Date ("01-14-2023");
console.log(mydateandtime.toLocaleString())

let myTimeStamp = Date.now();
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
