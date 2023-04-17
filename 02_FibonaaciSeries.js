function fibonacciSeries(n) {
  // Your code goes here
  let newArr = [0, 1];
  for (let i = 2; i < n; i++) {
    newArr.push(newArr[i - 1] + newArr[i - 2]);
  }
  return newArr;
}

console.log(fibonacciSeries(10));

function printFibonacci(n) {
    let a = 0, b = 1, nextTerm;
    console.log("Fibonacci Series:");
  
    for (let i = 1; i <= n; i++) {
      console.log(a);
      nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
  }
  console.log(printFibonacci(10));