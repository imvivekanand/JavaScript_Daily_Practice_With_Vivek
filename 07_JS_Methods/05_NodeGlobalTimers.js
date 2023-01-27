//setImmidiate -> Executes the function immidiately after the completion of the loop cycle.
let counter = 0;
console.log("first");

setImmediate((val) => {
  console.log(`immidiate ${val}`);
}, "Hello Vivek");

console.log("last");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

function keepRunning() {
  counter++;
  if (counter > 5) {
    clearInterval(int1);
  }
  console.log(`running ${counter}`);
}

const int1 = setInterval(keepRunning, 1000);

const int2 = setTimeout(() => {
  console.log("5 second timeout");
}, 5000);

const int3 = setTimeout(()=>{
    console.log('3 second timeout');
    clearTimeout(int2);
},3000)
