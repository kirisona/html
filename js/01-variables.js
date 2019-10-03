// JavaScript
/* 
 * JavaScript 
*/

// alert('Hello World!');
// alert(1+2);



// Global variables
var a;
a = 1;

var b = 2;
var b1, b2;

var c = a + b;

console.log(a + b + c);


// Variables
var pi = 3.14;
const PI = 3.14;
// PI = 0.01;  // ERROR = constant
// Variable declaration
var r = 1;

console.log('S of circle with radius = ' + r + ': ', pi * r * r / 4);
console.log('S of circle with radius = ' + r + ': ', PI * r * r / 4);


// Do not repeat yourself (DRY)
// Re-use your code ALWAYS!

function S_circle(r) {
    let pi = 3.14159;
    let result = pi * r * r / 4;
    r = 10000000;
    return result;
}

// console.log(result); // ERROR - undefined
// Value assignment - assign 2 to the variable r.
r = 2;

var S = S_circle(r);
// console.log(result); // ERROR - undefined

console.log('S of circle with radius = ' + r + ': ', S);

