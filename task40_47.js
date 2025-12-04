// Task 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(num-num,num)); // ["Ahmed", "Elham", "Osama"];


//Task 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(friends.indexOf("Eman"),friends.indexOf("Osama"))); // ["Eman", "Osama"]



// Task 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = [arrTwo.pop(), ...arrOne.reverse(), ...arrTwo.reverse()];

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]



// Task 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].substring(website.length).toUpperCase()); // ZERO


//Task 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
//1:)
if(haystack.indexOf(needle)!=-1){
  console.log("Found")
}
//2:)
if(haystack.lastIndexOf(needle)!=-1){
  console.log("Found")
}
//1:)
if(haystack.includes(needle)){
  console.log("Found")
}


//Task 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.shift()

allArrs = [arr2[arr2.length-arr1.length].toLowerCase() ,arr1.pop().toLowerCase(), arr2.pop().toLowerCase()].join("");

console.log(allArrs); // fxy