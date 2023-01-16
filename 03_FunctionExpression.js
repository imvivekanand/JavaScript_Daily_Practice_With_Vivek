//We cannot assign the values to the function before the function expression.

const multiply = function (a, b, c) {
  let value = a * b * c;
  console.log(value);
}; //expression

multiply(2, 3, 4);
