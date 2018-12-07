const fs = require("fs");

let input = fs
  .readFileSync(__dirname +"/../input.txt")
  .toString()
  .split("\n")
  .map(val => parseInt(val));
 const answer = input.reduce((prev, curr) => prev + curr,0); 


console.log(answer);
