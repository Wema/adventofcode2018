const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .split("\n");

const length = input[0].length;
let answer = undefined,
  index = 0;

while (answer === undefined && index < length) {
  var output = input
    .map(value => value.slice(0, index) + value.slice(index + 1))
    .filter((value, _, array) => array.indexOf(value,array.indexOf(value)+1) > -1);
  if (output.length > 0) answer = output[0];
  index++;
}

console.log(answer);
