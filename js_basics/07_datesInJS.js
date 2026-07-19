// begins jan 1 , 1970 
// date objects encapsulates an integral number that represent milliseconds

let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(typeof mydate) // object

// let mycreateddate = new Date(2023,0,12)
// let mycreateddate = new Date(2023, 0, 23, 5, 3)   // 5:03 am
let mycreateddate = new Date("2023-02-14")
console.log(mycreateddate.toDateString())
console.log(mycreateddate.toLocaleString())

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(mycreateddate.getTime())

console.log(Math.floor(Date.now() / 1000))

let newdate = new Date()
console.log(newdate)
console.log(newdate.getDay)

newdate.toLocaleString('default', {
    weekday: "long",
    timeZone: String
})