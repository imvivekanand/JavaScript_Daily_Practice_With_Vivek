const promise1 = new Promise((resolve, reject) => {
  const temp = 3;

  setTimeout(() => {
    reject("TIMED OUT");
  }, 1000);
  setTimeout(() => {
    resolve("HELLO");
  }, 500);

  //   if (temp > 5) {
  //     resolve("success");
  //   } else {
  //     reject("reject");
  //   }
});

promise1.then(
  //then is used to kick-in the promise
  (val) => {
    console.log(`True: ${val}`);
  },
  (err) => {
    console.log(`Error!~! : ${err}`);
  }
);
