const score = 400
console.log(score);


const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const anotherNumber = 123.823;
console.log(anotherNumber.toPrecision(2));


const hunderds = 10000000;
console.log(hunderds.toLocaleString('en-In'));


/*
Math -> most of the use of math library in random function
*/

console.log(Math.abs(-4)); //output -> 4
console.log(Math.abs(4)); //output -> 4

console.log(Math.round(4.88)); //output -> 5
console.log(Math.ceil(4.1)); //output -> 5
console.log(Math.floor(4.9)); //output -> 4


console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1));


const min = 20;
const max = 30;

console.log
(Math.floor((Math.random()* (max - min + 1))+min));











