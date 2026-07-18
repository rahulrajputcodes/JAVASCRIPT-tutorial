const name = "rahul"
const repocount = 5
console.log(name + repocount) // not recommended

console.log(`Hello my name is ${name} and my repo count is ${repocount}`) // good for string interpolation 

const gamename = new String("RAHUL-HC")
console.log(gamename[0])
console.log(gamename.__proto__) // prototypes are hidden - string wraps up the string prototypes that exists as object for global string constructor

console.log(gamename.length)
console.log(gamename.toLowerCase())
console.log(gamename.charAt(4)) 
console.log(gamename.indexOf('L'))

const newstring = gamename.substring(2,6) // last value not included

const newstring2 = gamename.slice(1,4)
 // (-7,3) -- will give string in reverse order , only slice will obey this idea 

 const string3 = "    nsjndnsn    "
 console.log(string3.trim())              // removes starting and ending index can be used in start as trimstart and end as trimend
 
 const url = "https://rahul.com/rahul%20rajput"
console.log( url.replace('%20', '-'))
console.log(url.includes('rahul'))

console.log(gamename.split('-'))