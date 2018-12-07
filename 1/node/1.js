var fs = require("fs");

console.log(process.cwd());

var input = fs
  .readFileSync(__dirname +"/../input.txt")
  .toString()
  .split("\n")
  .map(val => parseInt(val));
 answer = input.reduce((prev, curr) => prev + curr,0); 


console.log(answer);
