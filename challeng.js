// let titleOfPage = "Elzero ";
// let theDescption= "Elzero Web School";
// let dateOfPage = "25/10";
// let theContentOfPage=`
// <div class="card">
//     <h1> Hello ${titleOfPage}</h1>
//     <p>${theDescption}</p>
//     <span>${dateOfPage}</span>
// </div>
// `;

// document.write(theContentOfPage.repeat(4));
// document.write(theContentOfPage);
// document.write(theContentOfPage);


// Challenge Operator
let a=10;
let b="20";
let c=80;

console.log(++a + +b++ + +c++ - +a++); 

/*
[a++]
-Value: 11
-Explain: Pre Increment
[+]
-Explain: Adding Operator
[+b++]
-Value: 20
-Explain: Unary Plus Operator and Post Increment
[+]
-Explain: Adding Operator 
[+c++]
-Value: 80
-Explain: Unary Plus Operator and Post Increment 
[-]
-Explain: Subtraction Operator
[+a++]
-Value: 11
-Explain: Unary Plus Operator and Post Increment
 */
console.log(++a + -b + +c++ - -a++ + +a);
/*[++a]
-Value: 13
-Explain: Pre Increment
[+]
-Explain: Adding Operator
[-b]
-Value: -21
-Explain: Unary Negation Operator
[+]
-Explain: Adding Operator
[+c++]
-Value: 81
-Explain: Unary Plus Operator and Post Increment
[-]
-Explain: Subtraction Operator
[-a++]
-Value: -13
-Explain: Unary Negation Operator and Post Increment
[+]     
-Explain: Adding Operator
[+a]
-Value: 13
-Explain: Unary Plus Operator


 */
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/**
 * [--c]
 * -Value: 81
 * -Explain: Pre Decrement
 * [+]      
 * -Explain: Adding Operator
 * [+b]
 * -Value: 21
 * -Explain: Unary Plus Operator
 * [+]
 * -Explain: Adding Operator
 * [--a]
 * -Value: 12
 * -Explain: Pre Decrement
 * [*]
 * -Explain: Multiplication Operator
 * [+b++]
 * -Value: 21
 * -Explain: Unary Plus Operator and Post Increment
 * [-]
 * -Explain: Subtraction Operator
 * [+b]
 * -Value: 22
 * -Explain: Unary Plus Operator
 *  [*]
 * -Explain: Multiplication Operator
 * [a]
 * -Value: 12
 * [+]
 * -Explain: Adding Operator
 * [--a]
 * -Value: 11
 * -Explain: Pre Decrement
 * [-]
 * -Explain: Subtraction Operator
 * [+true]
 * -Value: 1
 * -Explain: Unary Plus Operator
 */

// challenge
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(+e * -d); //2000
console.log();//173 