let a = 27;
let b = 08;

(function (a, b) {
  // code goes here
  const val = a + b;
  console.log(val);
})(a, b); //IIFE

//or

((a,b) => {
  const value = a / b;
  console.log(value)
})(a,b);

//or

const multiply = (function (a, b) {
  // code goes here
  const val = a * b;
  return val;
})(a, b); //IIFE

console.log(multiply);
