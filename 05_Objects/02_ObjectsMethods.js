const newObj = {
  value: 0812,
  value1: true,
  value2: "String",
  value3: {
    first: "Vivek",
    second: "Anand",
  },
  fullName: function (value5) {
    console.log(this);
    console.log(value5);
    return this.value3.first + " " + this.value3.second;
    //this - returns the value of current active object.
  },
};

console.log(newObj.value3.first);
console.log(newObj.fullName());
console.log(newObj.fullName('test'));
