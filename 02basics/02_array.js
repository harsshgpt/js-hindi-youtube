const marvel_hero =["harsh","gupta","ji"];
const dc_hero = ["shyam","saini","ji"];

// marvel_hero.push(dc_hero);   //it adds array like an elements
// console.log(marvel_hero);
// console.log(marvel_hero[3])


const all_heros = marvel_hero.concat(dc_hero); //it merges two array not like push 

console.log(all_heros);

//now we are gonna use speread operator it used to add all array in one it doesnt have any limiitation

const heros = [...marvel_hero,...dc_hero]; //it works like concat but it can add multiple array instead of 2 arrays
console.log(heros);

// now we are gonna learn about flat operator it merges array in array syntax = flat(//depth)

const harsh = [2,4,5,64,[4,5,6],7,8[78,45,454[12,65,65,87,987,654]]];
const flatharsh = harsh.flat(Infinity);
console.log(flatharsh);



