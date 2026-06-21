const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greeting = "Hello, World!";
for (const char of greeting) {
  console.log(`each character: ${char}`);
}


const map = new Map()

map.set('in', 'India');
map.set('us', 'United States');
map.set('uk', 'United Kingdom');


for (const [key,value] of map){

    console.log(`key: ${key}, value: ${value}`);
}