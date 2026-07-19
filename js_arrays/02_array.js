const marvelheros = ["ironman", "thor", "hulk"]
const dcheros = ["superman", "flash", "batman"]

marvelheros.push(dcheros)
console.log(marvelheros) // takes dcheros as an array as an element

const combo = marvelheros.concat(dcheros)
console.log(combo)  // adds elements of dcheros into marvelheros

// but we gotta better operation for that too 
// spread operation ...
const allheros = [...marvelheros, ...dcheros]
console.log(allheros)

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherarray.flat(Infinity) // in the bracket we give the depth
console.log(real_another_array)

// for data scraping 
console.log(Array.isArray("RAHUL"))
console.log(Array.from("RAHUL")) // gives array of the characters of RAHUL
console.log(Array.from({ name: "rahul" })) // intersting case of key value pair scenario

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  // gives array of the values of given values 