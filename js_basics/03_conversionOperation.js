let score ="33abc"  // any string
// let score = null  --- gives 0
// let score = undefined  --- gives NaN
console.log (typeof score)

let valueInNumber = Number(score)
console.log (typeof valueInNumber)
console.log(valueInNumber) // NaN

// 33 - 33
// "33abd" - NaN
// true - 1 , false - 0

isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 - true , 0 - false 
// "" - false
// "jnns" - true