var fib = function(n) {
    let fseries = [0, 1]
    
        for(let i = 2; i<=n; i++){
            fseries.push(fseries[i-1] + fseries[i - 2])
        }
    return fseries[n]
};

console.log('====================================');
console.log(fib(11));
console.log('====================================');