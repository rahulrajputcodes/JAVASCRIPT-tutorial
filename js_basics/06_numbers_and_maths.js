const score = 400
// 400
const balance = new Number(100)  
// [Number: 100]
// when we define number as object it gives certain prototypes with it 
console.log(balance)

console.log(typeof(balance.toString()))
console.log(balance.toFixed(2))

const othernumber = 12.839
console.log(othernumber.toPrecision(3)) // 12.8
console.log(othernumber.toPrecision(2)) // 13

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math.abs(-4)) //4 // Math is an object library 
console.log(Math.round(4.6))
console.log(Math.floor(4.9)) 

console.log(Math.random()) // generates values between 0 annd 1
console.log(Math.floor((Math.random()*10)+1)) // generates values between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)