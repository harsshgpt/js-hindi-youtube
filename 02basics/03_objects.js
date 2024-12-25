//when we declare like littrals so it will not become singleton {}it is an empety object
//And when we make through constructor so it will become singleton     (Object.create)
const mySym = Symbol(mykey1);
const jsuser = {
    name : "Harsh",
    age : 24,
    [mySym]:"mykey1",
    location : "delhi" ,
}
//two ways to access objects
console.log(jsuser.age);
console.log(jsuser["name"]);
console.log(jsuser[mySym])