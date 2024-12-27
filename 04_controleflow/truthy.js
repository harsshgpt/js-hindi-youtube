//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// the truthy value are those value which we assume true 
//falsy value when the value is vacant

const name = "Harsh"
if (name){
    console.log(`your name is ${name}`);
    
}

//falsy numbers

// 0 , -0,"",null,undefined , BigInt 0n ,NaN , false

//truthy values
// "0" , " " ,'false' , [] ,{},function(){}


const object = {}

if(Object.keys(object).length === 0 ){   // to check object is emppety oor not
    console.log("object is empety");
    
}

const arr =  []

if (arr.length === 0 ){   // this functuon is used to check whether array is emppety or not 
    console.log("array is empety");
    
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//NULLISH COALESCING OPERATOR  ??  to avoid null and undefined case afte moving from it any first value will found and printed or passes

let val;
val = null ?? 10  // here it will give 10 (null and undefined not considered)
val =undefined ??10??20 //here also 10  will pass because it is at first and after null 
console.log(val)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//terniary Operator
//condition ? true:false

const amount = 1000

amount >900 ? console.log("too much price"):console.log("too less price")