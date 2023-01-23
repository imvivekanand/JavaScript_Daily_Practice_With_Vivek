let billa = ["Tom", "Dustin", "Damien", "Sam", "Samurai", "Puddle"];
const cat = billa;
for (let x = 0; x < 7; x++) {
  //   cat[billa.length] = "billa" + x;
  const pet = "billa" + x;
  billa.push(pet);
}
console.clear;
console.log(billa);
console.log(cat);
