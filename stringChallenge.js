/**
 * String Challenge
 * All Solutions Must Be In One Chain
 * You Can Concatenate 
 */
let a = "Elzero Web School";

// Include This Methods In Solution [slice , charAt ]

console.log(a.charAt(2).toUpperCase()+a.slice(3,6) )   //Zero 

// 8H
console.log(a.charAt(13).toUpperCase().repeat(8))  // HHHHHHHH

//Return Array
console.log(a.split(" ",1))  // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,6)} ${a.substr(11)}`)

//Solution Must Be Dynamic And String May Change
console.log(a.charAt(0).toLowerCase()+a.slice(1,-1).toUpperCase()+a.charAt(a.length-1).toLowerCase())  //eLZERO WEB SCHOOl