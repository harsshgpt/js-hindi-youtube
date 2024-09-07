const name = "harsh"
const repocount = 46
// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`)
const gamename = new String('gupta-harsh-mr')

console.log(gamename.toUpperCase())
console.log( gamename.charAt(5));
console.log(gamename.indexOf('s'))
console.log(gamename.substring(0,4))
const anotherstring = gamename.slice(4.-8)
console.log(anotherstring);


const newstring1 = "    harsh    "
console.log(newstring1);
console.log(newstring1.trim());


const url = "https://harsh.com/harsh%20gupta";
url.replace('20','-')
console.log(url.replace('20','-'))


console.log(url.includes('harsh'))
console.log(url.includes('sundar'))

console.log(gamename.split(''))