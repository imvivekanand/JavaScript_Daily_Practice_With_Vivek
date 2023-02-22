const lodash = require("lodash");

// console.log(lodash);

let ran1 = lodash.random(100);
console.log(ran1);

let ran2 = lodash.random(100, 1000);
console.log(ran2);

const arr = [3, 5, 77, 1, 3, 2323, 3, 3223324, "test"];

console.log(lodash.shuffle(arr));

lodash.times(10, () => {
  console.log(lodash.random(100));
});
