var test4 = function test5(i) {
  console.log(i);
  if (i < 5) {
    test5(i + 1);
  }
};

test4(0);

(() => {
  console.log("run right away");
})();

setTimeout(() => {
  console.log("I ran after 1 second");
}, 1000);
