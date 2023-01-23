let billa = ["Tom", "Dustin", "Damien", "Sam", "Samurai", "Puddle"];
const cat = billa;
for (let x = 0; x < 7; x++) {
  //   cat[billa.length] = "billa" + x;
  const pet = "billa" + x;
  billa.push(pet);
}
for (let x = 0; x<2; x++) {
  //   cat[billa.length] = "billa" + x;
  const angrypet = billa.pop();
  console.log('run away: ' + angrypet);
}
console.log(billa);
console.log(cat);
