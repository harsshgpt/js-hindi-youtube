// Diffrence between = and == and === is = is assigning opertaor == is comapritor operator it check whether both value are same or not === it works like == but it also check the type of littral which we are providing to it 
if(2 != 2){
    console.log("hi i am harsh") ;    // where we write code in object or in braces is called explicit context 
}else{
    console.log("not equal");
}

if(1<2) console.log("hi i am harsh gupta"),console.log("hi bro ") //implicit context   (NOt a best practice )



//else if 
const balance = 1000;

if (balance > 2000){
    console.log("you are poor");
    
}else if(balance >1000){
    console.log("you are mid");
}else if (balance >900){
    console.log("hi hello");
    
}



let name = 20
 name = 2
    console.log(name);
    
//&& is and if both true then true except false 
// || or if one of two context is saying true then true like 1 0 1, only if 0 0 then it will give 0 value 

const google = false
const email = false 

if (google || email || true){
    console.log("authenticated")
}