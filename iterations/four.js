const myObject= {
    js : 'JavaScript',
    py : 'Python',
    java : 'Java',
    cpp : 'C++'
}

for(const key in myObject){
    console.log(`key: ${key}, value: ${myObject[key]}`);
}

// for in loop is used to iterate over the properties of an object. It returns the keys of the object, which can be used to access the values of the object.

const promgrammingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];


for(const index in promgrammingLanguages){
    console.log(`index: ${index}, value: ${promgrammingLanguages[index]}`);
}