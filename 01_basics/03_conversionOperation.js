let score = undefined


console.log(typeof score)
console.log(typeof(score));

const scoreInNumber = Number(score);

console.log(typeof scoreInNumber);
console.log(scoreInNumber);


// "33" => 33
//  "333ramu" =>NaN
// true = 1 and false =0
// undefined => NaN
// null => 0


/*In js there are two types of memory 
1. Stack => used for all premitive data types like number , string , bollean etc 
            jb bhi hm stack memory ko use krte h means iske value ki copy milte h 
2. Heap => used for all non-premitives data types like array, object, tuple etc 
           jb bhi heap memory ka use krte h ye hme refrence deta h original value ka 
           ki jb bhi koi change krege to original vallue mein hoga
for exmple:
*/ 


let myYoutubeChannel = "devu@youtubedotcom"

let anotheName = myYoutubeChannel
anotheName = "raj@youtubedotcom"

console.log(myYoutubeChannel);

console.log(anotheName)


let userOne = {
    emailId : "user@gmail.com",
    upi : "user90@ybl"
}


let userTwo = userOne

userTwo.emailId = "dev@gmial.com"


console.log(userTwo)
console.log(userOne);




