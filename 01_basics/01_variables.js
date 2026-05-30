const accountId = 1444533
let accountEmail = "dev@gmail.com"
var accountPass = "1234"
accountCity = "Jaipur"

/*
prefer not to use var beacause of issue in block scope and functional scope
*/


// accountId = 870909 we can not do this

accountEmail = "ram@gmail.com"
accountPass = "122222"
accountCity  = "Rampur"

console.table([accountId, accountEmail, accountPass, accountCity])


