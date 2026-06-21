const myObject= {
    js : 'JavaScript',
    py : 'Python',
    java : 'Java',
    cpp : 'C++'
}

for(const key in myObject){
    console.log(`key: ${key}, value: ${myObject[key]}`);
}