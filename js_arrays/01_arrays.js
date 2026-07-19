// array 
// js arrays are resizable and can contain mix of different datatypes
// js array-copy-operation create shallow copies (share the same reference point)

const myarr = [1, 2, 3, 4, 5, 6]
const myheros = ["ironman", "hulk", "captain"]

const myarr2 = new Array(1, 2, 3, 4, 5)

// Array methods

myarr2.push(7) // adds 7 in array
myarr2.pop() // removes last element from array
myarr2.unshift(9) // adds 9 in the beginning of array
myarr2.shift() // removes the first element of the array 

console.log(myarr2.includes(2)) // true 
console.log(myarr2.indexOf(9)) // -1

const newarr = myarr.join()
console.log(typeof newarr) // string

// slice , splice 

console.log("A", myarr)