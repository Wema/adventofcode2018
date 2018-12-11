const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .split("\n")

const fabric = Array(1000).fill().map(_ => Array(1000).fill(0));
input.forEach(value => {
  const parts = value.split(" ");
  const id = parts[0];

  const [x1,y1] = parts[2].slice(0, -1).split(",").map(_ => parseInt(_));
  const [columns, rows] = parts[3].split("x").map(_ => parseInt(_))
  const [x2,y2] = [x1 + columns, y1 + rows];
  let row = y1;
  while(row < y2){
    let column = x1;
    while(column < x2){
      fabric[row][column] = (fabric[row][column] || 0) + 1;
      column++;
    }
    row++;
  }
});

console.log(fabric.reduce((prev, curr) => prev + curr.filter(value => value > 1).length , 0));
