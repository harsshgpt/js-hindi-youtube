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
