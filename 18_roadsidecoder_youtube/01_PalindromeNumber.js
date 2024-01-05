// Q1: Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121 => output: true
// Input: x = 10 => output: false

const isPalindrome = (num) => {
    return num<0 ? false : num === +num.toString().split("").reverse().join("")
}

const res = (isPalindrome(121));
console.log(res);