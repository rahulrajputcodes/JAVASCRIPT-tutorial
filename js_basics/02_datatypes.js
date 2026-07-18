"use strict"; // treats all JS code as a newer version 

// alert(3+3) // we are using nodejs , not browser
// code must be readable enough too 
// console.log(6+6); console.log(8)  // bad practice 

// number - has a range 
let age = 18

// string - " "
let name = "rahul"

// boolean - true / false
let eligible = true 

// null - standalone value 
//undefined

//symbol - uniqueness

//object

console.log(typeof(age))

console.log(typeof null) //object
console.log(typeof undefined) //undefined

const id = Symbol('123')
const anotherId = Symbol("123")
console.log(id === anotherId)

const bigNum = 37879739879381931n
console.log(typeof bigNum)