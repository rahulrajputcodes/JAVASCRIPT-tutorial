const user = {
    username: "rahul",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this},welcome to wwebsite`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);                // {}

function hello() {
    console.log(this);
}
hello();                    // gives a lot of values

// function hello() {
//     let username = "rahul"
//     console.log(this.username);
// }
// hello();             // undefined

// const hello = function () {
//     let username = "rahul"
//     console.log(this.username);      // undefined
// }



// ARROW FUNCTION ----

const hello = () => {
    let username = "rahul"
    console.log(this.username);
}
hello();    //undefined

// basic arrow function

// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,4)) // 7

// implicit return - widely used in react

// const addtwo = (num1,num2) => num1+num2
// const addtwo = (num1, num2) => (num1 + num2)

// returning objects

const addtwo = (num1, num2) => ({ username: "rahul" })
console.log(addtwo(3, 4))



