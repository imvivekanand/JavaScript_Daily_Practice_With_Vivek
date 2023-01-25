const myArr = [1, 2, 3, 4, "five", "six"];

const myObj = {
  first: "Vivek",
  second: "Anand",
  country: "India",
};
console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

//forEach loop requires a function
myArr.forEach((val) => {
  console.log("S.No. " + val);
});

//for in loop
for (key in myObj) {
  console.log(key, myObj[key]);
}

console.log(Object.entries(myObj));

Object.entries(myObj).forEach(([val, key]) => {
  console.log(val, key);
});

console.log(Object.keys(myObj));

const myArr2 = Object.values(myObj);
myArr2.forEach((val, index, arr) => {
  console.log(val, index, arr);
});
