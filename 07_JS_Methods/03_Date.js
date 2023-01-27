const newD = new Date();
console.log(newD);

const oldD = new Date(2020, 0, 1,9,30,50);
const oldD1 = new Date(2020, 0);
console.log(oldD1);

const zeroday = new Date(10000000000000); //Jan 1, 1970
console.log(zeroday);

const isoDate = new Date("1980-01-15");
console.log(isoDate);
zeroday.setFullYear(2020);

console.log(zeroday.getTime());
console.log(zeroday.getFullYear());
console.log(zeroday.getDay());
console.log(zeroday);

