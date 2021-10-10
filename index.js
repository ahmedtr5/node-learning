
// import {add, mult} from "./functions.js"
// + package.json type: module

let functions = require('./functions.js');

console.log(functions.add(5,3));
// console.log(add(5,3));


console.log(functions.mult(5,4));
// console.log(add(5,3));


const fibonacci = require ('fibonacci');
// import fibonacci from "fibonnacci"
const bigNumber = fibonacci.iterate (3000);
console.log (bigNumber);
