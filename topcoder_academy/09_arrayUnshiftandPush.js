// function mixedNumbers(arr) {
//   // Only change code below this line
//   arr = arr;
//   arr.unshift("I", 2, "three");
//   arr.push(7, "VIII", 9);
//   // Only change code above this line
//   return arr;
// }

// console.log(mixedNumbers(["IV", 5, "six"]));

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(0,1)
// arr.splice(3,4)
// // Only change code above this line
// console.log(arr);

function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2,4)
    return arr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));