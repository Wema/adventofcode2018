var fs = require("fs");
var input = fs
  .readFileSync("../input.txt")
  .toString()
  .split("\n")
  .map(val => parseInt(val));

var frequency = 0;  
var first = undefined;
var answers = {};

console.log(input);

while (first === undefined) {
  input.reduce((prev, curr) => {
    frequency = prev + curr;
    if (answers[frequency] != true) answers[frequency] = true;
    else if (first === undefined) first = frequency;
    return frequency;
  }, frequency);
}
console.log(first);
