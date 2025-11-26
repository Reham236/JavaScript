let a=1_00;
let b=2_00.5;
let c=1e2;
let d=2.4;
// Find The Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a,b,c,d)));
 // Use variables a + d one time to get the needed output
 console.log(a**parseInt(d)); // 10000

 //Get Integer "2" From d Variable With 4 Different Methods
 console.log(parseInt(d)); // Method 1
 console.log(Math.floor(d)); // Method 2
 console.log(Math.trunc(d)); // Method 3
console.log(+d.toFixed(0)); // Method 4