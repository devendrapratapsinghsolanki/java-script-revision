// const arr = ['js', 'py', 'java', 'cpp'];

// // const newArr = arr.map((item)=>{
// //     return item;
// // })

// // console.log(newArr);

// const coding = arr.forEach ( (item)=>{
//     console.log(item);

// })

// console.log(coding); 


// // undefined, because forEach does not return a new array, it returns undefined. It is used to iterate over an array and perform a function on each element of the array.  
// const nums = [1, 2, 3, 4, 5];

// const newNums = nums.map((num)=>{
//     return num * 2;
// })

// console.log(nums.filter((num)=> num >3))


const booke = [{title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
{title: "To Kill a Mockingbird", author: "Harper Lee"},
{title: "1984", author: "George Orwell"},
{title: "Pride and Prejudice", author: "Jane Austen"}];


const newabook =  booke.filter ((bk) =>{return bk.title === "1984"});
console.log(newabook);