let billa = ["Tom", "Dustin", "Damien", "Sam", "Samurai", "Puddle"];
const cat = billa;
for (let x = 0; x < 7; x++) {
  //   cat[billa.length] = "billa" + x;
  const pet = "billa" + x;
  billa.push(pet);
}
for (let x = 0; x<2; x++) {
  const angrypet = billa.pop();
  console.log('run away: ' + angrypet);
}
for (let x = 0; x<2; x++) {
  const angrypet = billa.shift();
  console.log('run away earlier: ' + angrypet);
}
for (let x = 0; x<2; x++) {
  const happypet = 'Add new billa ' + x;
  billa.unshift(happypet);
  console.log('Came home: ' + happypet);
}
console.log(billa);
console.log(cat);
