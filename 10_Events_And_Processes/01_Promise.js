// let ready = true;
let ready = false;

const checker = new Promise((resolve, reject) => {
  if (ready) {
    console.log(ready);
    const markReady = "This is the result";
    resolve(markReady);
  } else {
    const markNot = "Still working on it.";
    reject(markNot);
  }
});

// console.log(checker);
ready = false;
// console.log(checker);

const check1 = () => {
    checker.then(val =>{
        console.log(val);
    })
    .catch(err=>{
        console.log('error');
        console.log(err);
    })
}
check1();