/**
 * If Condition Challenge
 */


let a = 10;
if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 to 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}
// Write with Ternary If Syntax

a < 10 
? console.log(10) : 
a >= 10 && a <= 40 
? console.log("10 to 40") :
 a > 40 
? console.log("> 40") : 
console.log("Unknown");


//////////////////////////////////////////////////////
/**
 * if("????" ===  "34"){
    console.log("Good");
}
 */

let st = "Elzero Web School";
if(typeof st === typeof "34"){
    console.log("Good");
}