// for of loop

const arr = [2,5,33,5,5,448,3]
for (const i of arr) {
//    r 
       
}

//Maps  it doesnt take same entry multiple time like duplicate entry 

const maps = new Map()
maps.set("in","India")
maps.set("frc","france")
maps.set("sr","srilanka")

for (const[key,value]of maps) {
    console.log(`the value of key is ${key} and the value is ${value}`)
}