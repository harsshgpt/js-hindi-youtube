// promise is an object which include some task to do , it basically like i promise to do some task 

const promiseOne = new Promise(function(resolve,reject){
 // Use case+++++++
 // Do an async task
 //DB calls, cryptograyphy, network
 setTimeout(function(){
    console.log("Async task is completed")
    resolve()
 },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
 })


 new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async 2 assigned");
    resolve()
  },1000)
  }).then(function(){
    console.log("async 2 consumed");
 })


 const promiseThree = new Promise (function(resolve , reject){
    setTimeout(function(){
         resolve({username:"Harsh",email:"harsshgupta25@gmail.com",phn:"7310461571"})
    },1000)
 })


 promiseThree.then(function(user){
    console.log(user)
 })



 const promiseFour = new Promise(function(resolve,reject){
    let rejec = false
    if(!rejec){
        setTimeout(function(){
            resolve({username:"Harsh", password:"123"})
        },1000)
    }else{
       reject('showing error')
    }
 })

 promiseFour.then(function(val){
    console.log(val)
    return val.username
 }).then(function(val){  // it is returned by resolve
    console.log(val)
 }).catch(function(error){  //it is return by reject 
    console.log(error)
 }).finally(function(){     // it default run 
    console.log("everything has done")
 })


 const promiseFive = new Promise(function(resolve,reject){
     let error = false
     if(!error){
      setTimeout(function(){
        resolve({username : "js",pass:"123"})
      })
     }else{
        reject('Error:js is throwing error')
     }
 })

 async function result() {
    try {
       const responce = await promiseFive
       console.log(responce) 
    } catch (error) {
        console.log(error);
    }
 }

 result()


 
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((responce)=>{
    return responce.json()}
).then(function(result){
 console.log(result)
}).catch(function(error){
   console.log(error)
})