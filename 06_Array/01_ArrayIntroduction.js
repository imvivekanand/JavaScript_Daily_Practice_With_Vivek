let Array1 = ["Vivek", 08, true, { zero: "Zero", eight: "Eight" }];
let obj = { One: "one", Two: "two" };
console.log(Array1);

console.log(typeof Array1);
console.log(typeof obj);

const Array2 = Array1;

Array2[0] = 'Anand'
console.log(Array2[0]);
console.log(Array2[1]);
console.log(Array2[2]);
console.log(Array2[3]);

console.log(Array1);


//length
console.log(Array1.length);