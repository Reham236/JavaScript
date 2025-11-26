// Task 1
let numberOne = 10 ;
let numberTwo = 20 ;
console.log(numberOne+""+numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne+""+numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof (`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log(numberTwo+ "\n" + numberOne); // Normal Concatenate With New Line => 20 new line 10
console.log(`${numberTwo}\n${numberOne}`); // Template Literals Way With New Line => 20 new line 10

// Task 2
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// Task 3
console.log("I'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"");

// Task 4
let a = 21;
let b = 20;

console.log("_"+(a+"_"+b).repeat(4)+"_"); // _21_2021_2021_2021_20_
console.log()