const tinder = new Object();

tinder.id = "1122FB";
tinder.user_name = "Rahul";
tinder.use_age = 32;
tinder.user_proffesion = "Software Engineer";
tinder.userIsLogin = false;

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
console.log(tinder.hasOwnProperty('id'))




const regularUser = {
    email : 'sum@gmail.com',
    fullName : {
        userFullName : {
            firstname : "Devendra",
            lastname :"Solanki"
        }
    }
}

// console.log(regularUser.fullName.userFullName);


// console.log(tinder);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"c", 4:"d"}


const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);


const user = [
    {
        id : 1,
        name : "dev",
        email : "dev@gmial.com"
    },
      {
        id : 2,
        name : "ram",
        email : "ram@gmial.com"
    },
      {
        id : 3,
        name : "john",
        email : "john@gmial.com"
    },
      {
        id : 4,
        name : "suresh",
        email : "suresh@gmial.com"
    }
 
]

// console.log(user[0].email);
