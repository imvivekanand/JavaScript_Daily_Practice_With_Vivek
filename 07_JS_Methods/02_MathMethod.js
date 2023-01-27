console.log(Math.random());

console.log(Math.random() * 100); //It will generate a number between 0 to 100.

let sankhya = Math.random() * 100;
console.log(Math.floor(sankhya)); //It will generate a number between 0 to 100.
console.log(Math.ceil(sankhya)); //It will generate a number between 0 to 100.

for (let i = 0; i < 100; i++) {
  console.log(ranNum(1, 10));
}

function ranNum(min, max) {
  return Math.floor(Math.random() * max + min);
}
