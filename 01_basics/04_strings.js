// console.log(`hello my name is ${'devendra'} and my repo count is ${40} `);
let myName = "Devendra";
let myGf= "Preeti";

console.log(`My name is ${myName} and My love is ${myGf}`);


const gameName = new String('DevendraDC');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('D'));



const newString = gameName.substring(0,5);
console.log(newString);

const otherString = gameName.slice(-9,4);
console.log(otherString);


const newStringOne = "   dEvedeve    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.devendrapratap.in/solanki%20dev"

console.log( url.replace('%20', '-'));

console.log(url.includes('deveee'));

const name = "histesh-chaushary-solanki";
console.log(name.split('-'));









