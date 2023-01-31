const test1 = require('./01_test1');
const test2HaHa = require('./01_test2');
// console.log(module.filename);

test1.test1();
console.log(test1);
const myName = `${test1.person.first} ${test1.person.last}`;
const myName2 = `${test2HaHa.person.first} ${test2HaHa.person.last}`;
console.log(myName);
console.log(myName2);