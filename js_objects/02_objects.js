const tinderuser = new Object() // singleton object // {}
// const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "rahul"
tinderuser.isLoggedIn = false

console.log(tinderuser)

const regularuser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rahul",
            lastname: "rajput"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname) // use fullname? - if fullname doesn't exist

// object concatenation

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({}, obj1, obj2) // if {} isn't given the values will actually be reflected in obj1
console.log(obj3)

// using spread operator 
const obj4 = { ...obj1, ...obj2 }
console.log(obj4)

// from database we get these kinda values 

const users = [
    {
        id: 1,
        email: "xyuyxerdre"
    },
    {
        id: 2,
        email: "jferneksmmk"
    }
]

// users[0].email -- to access the object attributes

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser)) // gives array of array of key-value pair 

console.log(tinderuser.hasOwnProperty('id'))

// destructing of objects 

const course = {
    coursename: "js in hindi",
    price: "$400",
    courseIntructor: "rahul"
}

// course.courseIntructor
const { courseIntructor: instructor } = course // we use this to avoid referring our object again and again - used in react 
console.log(instructor)

// APIs - can either be given in the form of objects or array of objects
// json - javascript object notation
