// singeton - using constructor
// object.create

// object literals

const mysymbol = Symbol("key1")
const jsuser = {
    name: "rahul",
    "full Name": "rahul rajput",
    // way 1
    // mysymbol: "mykey1",              // but here it's not accessed as symbol
    // way 2 
    [mysymbol]: "mykey1",
    age: 21,
    location: "bengaluru",
    isLoggedIn: false
}
console.log(jsuser.name)
console.log(jsuser["name"]) // needs to access as a string 

// console.log(jsuser.full Name) // there is no way to access it through dot(.)
console.log(jsuser["full Name"])

// console.log(jsuser.mysymbol) // via first way it's treated as string

console.log(jsuser[mysymbol]) // need to access via [_____]

jsuser.name = " rahul "
// Object.freeze(jsuser)  // so if we change any value afterwards it won't show any error but won't change the value too
jsuser.greeting = function () {
    console.log("HELLO JS USER")
}
jsuser.greetingtwo = function () {
    console.log(`HELLO JS USER, ${this.name}`)
}
// console.log(jsuser.greeting) // function-anonymous
jsuser.greeting() // HELLO JS USER
jsuser.greetingtwo()