function sayMyName() {
    console.log("Rahul");

}
sayMyName() // reference - sayMyName

function addTwoNumbers(number1, number2) { // values passed here are paramenters
    let result = number1 + number2
    return result
    console.log(result); // once return is executed the rest of the code is unreachable 
}
const result = addTwoNumbers(3, 1) // values passed here are called arguments
console.log("Result :", result)

function loginUserMessage(username = 'sam') { // sam is the default value 
    if (username === undefined) { // !username
        return "please enter a username"
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rahul"));

// ... - rest / spread operator based on usecase , here we take it as rest operator to take any number of parameter inputs 
// if we write val1 and val2 - then it'll take initial two parameters into them and rest in num
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 500)); // will return an array of arguments 

// Way 1 :
// const user = {
//     username: "rahul",
//     price: 199
// }

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);

}
// handleObject(user) 

// Way 2:
handleObject({
    username: 'sam',
    price: 800
})
