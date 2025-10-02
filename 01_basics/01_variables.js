const accountId = 144553
let accountEmail = "ankit@test.com"
var accountPassword = "12345" //don't use this
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "test@test.com"
accountPassword = "67890"
accountCity ="Bengaluru"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope(if else, for) and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
