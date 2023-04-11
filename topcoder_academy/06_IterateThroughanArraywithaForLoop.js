// //Sum of the elements of the array.
// const myArr = [2, 3, 4, 5, 6];

// let total = 0;

// for(let i = 0; i < myArr.length; i++){
//     total += myArr[i];
// }


function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for(let i = 0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        product *= ( arr[i][j]);
        console.log(product);
    }
  }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
