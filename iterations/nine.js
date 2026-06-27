// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArray = array.reduce((accumulator, currentValue) => {
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 1);  
// console.log(newArray); // 55

const shoppingCart = [
    { item: "Laptop", price: 1000 },
    { item: "Phone", price: 500 },
    { item: "Tablet", price: 300 },
    { item: "Headphones", price: 100 }
];

const totalPrice = shoppingCart.reduce((acc,item) => acc +item.price, 0);
console.log(totalPrice); // 1900