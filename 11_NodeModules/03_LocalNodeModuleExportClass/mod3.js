const person = require('./test5')

const friend1 = new person('Lauence', 'Svekis');
const friend2 = new person('Sumit', 'Saurav');
const friend3 = new person('Rohit', 'Srivastava');

console.log(friend1.first);
console.log(friend1.last);
console.log(friend1.myName());
console.log(friend2.myName());
console.log(friend3.myName());