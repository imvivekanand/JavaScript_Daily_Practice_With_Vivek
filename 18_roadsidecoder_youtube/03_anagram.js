var isAnagram = function(s, t) {
    return (s.split("").sort().join("") === t.split("").sort().join("")) ? true : false;
};

console.log('====================================');
console.log(isAnagram("vivek", "keviv"));
console.log('====================================');