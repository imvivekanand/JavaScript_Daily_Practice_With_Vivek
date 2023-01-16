let counter = 100;
function loop(val) {
  console.log(val);
  if (val < 1) {
    return;
  }
  const temp = val - 1;

  loop(temp);
}
loop(counter);