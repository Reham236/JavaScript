// Task 1

// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 +5e4); // 100000
console.log(1e5); // 100000
console.log(10**5); // 100000
console.log(10**2 * 10**3); // 100000
console.log(1e2 * 1e3); // 100000
console.log(2 * 50000); // 100000
console.log(25 * 4000); // 100000
console.log(200000 / 2); // 100000

// Task 2
console.log(-Number.MIN_SAFE_INTEGER) // 9007199254740991

// Task 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// Task 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// Task 5
let num = 10;

console.log(true+Number.isInteger(num)); // 2

// Task 6
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10


// Task 7
console.log(Math.floor(Math.random() * 4) + 1); // From 1 To 4