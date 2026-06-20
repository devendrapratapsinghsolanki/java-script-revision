const temp= 40;

if (temp <50) {
    console.log("It's cold outside");
} else if (temp < 70) {
    console.log("It's warm outside");
} else {
    console.log("It's hot outside");
}


const score = 85;

if (score > 80){
    const power = 2;
    console.log(`You passed with a score of ${score} and your power is ${power}`);
}

// console.log(`Your score is ${power}`); // This will cause an error because power is not defined outside the if block


const userLoggedIn = true;
const debitCard = true;

const userLoggedInFromGoogle = true;

if (userLoggedIn && debitCard && userLoggedInFromGoogle) {
    console.log("All conditions are met!");
}
