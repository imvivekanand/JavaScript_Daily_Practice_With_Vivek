let arrayv2 = ["Web", "Dev", "Projects", "Internshala"];
// arrayv2.length = 0;

const arrayv3 = arrayv2.map((val) => {
  return val;
});
arrayv2[2] = "Blockchain";

console.log(arrayv3);
console.log(arrayv2);

const arrayv4 = arrayv2.map(val=>{
    val += ' Padho';
    return val;
});

console.log(arrayv4);