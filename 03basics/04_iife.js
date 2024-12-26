//immidiatly invoked function expression (iife)

//it is used to imidiatly run that function without plluted by global function 

//we use two () one is wrap and second one is execution call ()()

(function name (){
    console.log("hi i am Harsh ");
    
})();  //by this we dont have to write like name() as in this case it will run automatically
 
//++++++++++++ note - use ; after ending iife ()(); to run below execution

//in arrow function 


(() => {
    //Named iife
 console.log("harsh");
})();
                                                 //iife is very important in terms of interview ++++++++++++++++++++++++++
((name) => {
    //simple iife
 console.log(`my name is ${name}`);
})('harsh');
