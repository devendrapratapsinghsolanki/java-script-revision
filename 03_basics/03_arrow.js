// const user = {
//     name: "Devendra",
//     price: 100,


//     wellocomeMessage : function(){
//         console.log(`${this.name}, Welcome to my website` );
//         console.log(this);
//     }
// }

// user.wellocomeMessage();

// user.name = "sam"
// user.wellocomeMessage();


// console.log(this);


const chai = () =>{
    const username = "Devendra"
    console.log(`${username} just logged in`);
    console.log(this);
}

chai()

const addTwo = (num1 , num2 )=> num1 + num2

console.log(addTwo(10,20));


(function (){
    console.log("I am an IIFE");
})()

