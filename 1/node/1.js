var fs = require("fs");
var input = fs
  .readFileSync("../input.txt")
  .toString()
  .split("\n")
  .map(val => parseInt(val));
 answer = input.reduce((prev, curr) => prev + curr,0); 


console.log(answer);
