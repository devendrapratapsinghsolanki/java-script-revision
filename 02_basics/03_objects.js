const mysymbol = Symbol ("key")

const Jsuser = {
    name : "devendra",
    "full Name" : "Devendra Solanki",
    age : 23,
    email : "dev@google.com",
    isLogin : false,
    LastLogin : ["Monday","Saturday"],
    [mysymbol] : "value"
}

// console.log(Jsuser["full Name"]);
// console.log(Jsuser["name"]);
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log(`Hello js user ${Jsuser.name} , your age is ${this.age}`)
}


console.log(Jsuser.greeting());

