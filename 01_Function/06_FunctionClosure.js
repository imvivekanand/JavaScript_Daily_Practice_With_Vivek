function closure(value1){
    return function(value2){
        console.log(value1, value2);
        return value1 + value2;
    }
}
const fun1 = closure(5);
const fun2 = closure(25);

console.log(fun1(15));
console.log(fun1(20));
console.log(fun1(75));