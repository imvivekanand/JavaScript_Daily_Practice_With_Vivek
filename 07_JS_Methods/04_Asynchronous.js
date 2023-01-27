// console.log(global);
// let a = 'hello';

// function timer(value) {
//   console.log(`timer ran ${value} ${a}`);
// }

// setTimeout(timer, 2000, "Timer 1");

// a='world';

//or

// let a = "hello";
// let counter = 0;

// function timer(value) {
//   console.log(`timer ran ${value} ${a}`);
// }

// function message(value) {
//   counter++;
//   console.log(`${counter}. -${val}`);
// }

// for (let i = 5; i > 0; i--) {
//   setTimeout(timer, i * 1000, `${counter} Loop: ${i * 1000}`);
// }

// console.log('new val');

// a = "world";

//or

let a = "hello";

let counter = 0;

function timer(value) {
  console.log(`timer ran ${value} ${a}`);
}

function message(value) {
  counter++;
  console.log(`${counter}. -${value}`);
}

for (let i = 5; i > 0; i--) {
  setTimeout(
    () => {
      message(`i=${i}`);
    },
    i * 1000,
    `${counter} Loop: ${i * 1000}`
  );
}

console.log("new val");

a = "world";
