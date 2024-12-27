//break and continue function in loops to stop loop at specific value  

// for (let i = 1; i<=20;i++){
//     if(i == 5 ){
//         break; // break statement if 5 found
//     }
//     console.log(i);
    
// }

for (let i = 1; i<=20;i++){
    if(i == 5 ){
        continue; // it return pointer to the start the loop by leaving those error defined in if condition print all number except 5 
    }
    console.log(i);
    
}