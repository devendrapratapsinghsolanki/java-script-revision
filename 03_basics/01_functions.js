function addTwoNumbers(num1, num2) {
    return num1 + num2
}

// console.log(addTwoNumbers(7,7))

function userLoggedinMessage(user) {
    return `${user} just logged in`
}

//    console.log(userLoggedinMessage("Devendra"))

function calculateCartPrice (val,val2, ...num){
    return num
}

console.log
(calculateCartPrice(100,200,300,400));

const users = {
    name: "Deve",
    price: 199
}

function handleObj(anyobject){
    console.log(`User Name is ${anyobject.name} and price is ${anyobject.price}`);
    
}

handleObj(users);