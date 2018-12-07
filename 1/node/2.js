const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .split("\n")
  .map(val => parseInt(val));

let frequency = 0;  
let first = undefined;
let frequencies = {};

while (first === undefined) {
  input.reduce((prev, curr) => {
    frequency = prev + curr;
    if (frequencies[frequency] != true) frequencies[frequency] = true;
    else if (first === undefined) first = frequency;
    return frequency;
  }, frequency);
}
console.log(first);
