const arr = [1, 2, 3, 4, 5];

function asynFun(myArr, callback) {
  myArr.forEach((el) => {
    setTimeout(callback, 1000, el);
  });
  myArr.forEach((el) => {
    setTimeout(callback, 0, `${el}--Async`);
  });
}

asynFun(arr, (val) => {
  console.log(val);
  console.log("async");
});

console.log("test");

arr.forEach((el) => {
  console.log(el);
  console.log("sync");
});

console.log("one");
setTimeout(() => {
  console.log("five");
}, 2000);
console.log("two");
setTimeout(() => {
  console.log("four");
}, 500);
console.log("three");
setTimeout(() => {
  console.log("six");
}, 0);
console.log("pre four")