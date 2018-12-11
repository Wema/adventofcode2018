const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/../input.txt")
  .toString()
  .split("\n")

const fabric = Array(1000).fill().map(_ => Array(1000));
const ids = {};
input.forEach(value => {
  const parts = value.split(" ");
  const id = parts[0];
  ids[id] = false;
  const [x1,y1] = parts[2].slice(0, -1).split(",").map(_ => parseInt(_));
  const [columns, rows] = parts[3].split("x").map(_ => parseInt(_))
  const [x2,y2] = [x1 + columns, y1 + rows];
  let row = y1;
  while(row < y2){
    let column = x1;
    while(column < x2){
      fabric[row][column] = fabric[row][column] || [];
      fabric[row][column].push(id);
      if(fabric[row][column].length > 1){
        fabric[row][column].forEach(id => ids[id] = true);
      } 
      column++;
    }
    row++;
  }
});

console.log(Object.values(ids).filter(value => value === false));
console.log(Object.entries(ids)[Object.values(ids).indexOf(false)][0]);
