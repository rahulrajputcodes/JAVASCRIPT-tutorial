// let a = 10 
// const b = 20
// var c = 30 

// var c = 300
let a = 200

if (1) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER :", a) // 10
}
console.log("OUTER :", a);      // a isn't defined , will return 200 when it's declared globally 
console.log(b);      // b isn't defined
console.log(c);      // 300

// functional scope nesting 

function one() {
    const username = "rahul"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   // error 
    two()
}
one()

// ++++++++++++++ interesting ++++++++++++++

// addone(5);     - this will execute perfectly fine 
function addone(num) {
    return num + 1
}
addone(5)

// addtwo(5)     - here it'll show error 
const addtwo = function (num) {
    return num + 2
}
addtwo(5)