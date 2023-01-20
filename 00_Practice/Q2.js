// Given an integer n, return an string array answer where: answer[i]=="FizzBuzz" if i is divisible by 3 and 5. answer[i]=="Fizz" if i is divisible by 3. answer[i]=="Buzz" if i is divisible by 5. answer[i] == i (as a string) if none of the above conditions are true.

let fizzBuzz = (n) => {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      array.push("FizzBuzz");
    } else if (i % 3 ==0) {
      array.push("Fizz");
    } else if (i % 5 == 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }
  console.log(array);
};

fizzBuzz(50);
