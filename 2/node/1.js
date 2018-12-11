const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .split("\n");

let twos = 0,
  trees = 0;

input.forEach(value => {
  const info = value.split("").reduce((prev, curr) => {
    if (prev[curr]) prev[curr]++;
    else prev[curr] = 1;
    return prev;
  }, {});
  twos = Object.values(info).indexOf(2) > -1 ? twos + 1 : twos;
  trees = Object.values(info).indexOf(3) > -1 ? trees + 1 : trees;
});

console.log(twos * trees);
