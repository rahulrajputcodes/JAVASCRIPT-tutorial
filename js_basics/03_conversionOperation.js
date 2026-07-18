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

// *********************** Operations *************************

let str1 = "hello "
let str2 = "lala"
let str3 = str1 + str2
console.log(str3) 

console.log("1"+2+2) // 122
console.log(1+2+"2") // 32

//but don't do this 
console.log(+true) // 1
// console.log(true+) //true+
console.log(+"") // 0
let num1, num2 , num3
num1=num2=num3= 2+2

// prefix and postfix