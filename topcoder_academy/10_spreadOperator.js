// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr = [[...arr], ...newArr];
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 3));

// let thisArray = ["I", "hate", "Sitamarhi"];
// let thatArray = ["love"];

// thisArray[1] = [...thatArray];
// let myArray = [...thisArray];
// console.log([myArray]);

//   Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem)=== -1){
        return false;
    }else {
        return true;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));