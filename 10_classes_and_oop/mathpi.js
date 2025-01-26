const getter = Object.getOwnPropertyDescriptor(Math,'PI')
getter.value = 5
console.log(getter)

const object ={
    name :"Harsh",
    adress:"noida",
    phn:7310461571
}

console.log(Object.getOwnPropertyDescriptor(object,"name"))

Object.defineProperty(object,'name',{
    writable: false,
    enumerable:false,
    configurable:false,
    
})
console.log(Object.getOwnPropertyDescriptor(object,"name"))