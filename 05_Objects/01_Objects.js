const obj = {
  first: "Vivek",
  last: "Anand",
  Age: 26,
  V1: 'A',
  V2: 'N',
  V3: 'A',
  V4: 'N',
  V5: 'D',
};

console.log(obj);
console.log(obj.first + " " + obj.last);
console.log(obj['first'] + " " + obj['last']);

for(let x=1;x<=5;x++){
    console.log("V"+x);
    console.log(obj["V"+x]);
}