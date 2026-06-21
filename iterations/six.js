const arr = ['js', 'py', 'java', 'cpp'];

// const newArr = arr.map((item)=>{
//     return item;
// })

// console.log(newArr);

const coding = arr.forEach ( (item)=>{
    console.log(item);

})

console.log(coding); 
// undefined, because forEach does not return a new array, it returns undefined. It is used to iterate over an array and perform a function on each element of the array.  

