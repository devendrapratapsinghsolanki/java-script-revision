const arr = ["js", "py", "java", "cpp"];

// arr.forEach( function (val){
//     console.log(`value: ${val}`);
// })

// arr.forEach( (item) => {
//     console.log(`item: ${item}`);
// })

// arr.forEach((item, index, array) =>{
//     console.log(`item: ${item}, index: ${index}, array: ${array}`);
// })

const myCoding = [
    {
        name: 'JavaScript',
        type: 'Programming Language',
        year: 1995
    },
    {
        name: 'Python',
        type: 'Programming Language',
        year: 1991
    }, 
    {
        name: 'Java',
        type: 'Programming Language',
        year: 1995
    },
    {
        name: 'C++',
        type: 'Programming Language',
        year: 1985
    }
]

myCoding.forEach((item)=>{
    console.log(item.name);
})