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

//or

function loop2(val) {
  console.log(val);
  if (val > 0) {
    val--;
    return loop2(val);
  }
  return "end";
}
const looper = loop2(25);
console.log(looper);
