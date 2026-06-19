const user = {
    name: "Devendra",
    price: 100,


    wellocomeMessage : function(){
        console.log(`${this.name}, Welcome to my website` );
        console.log(this);
    }
}

user.wellocomeMessage();

user.name = "sam"
user.wellocomeMessage();


console.log(this);

