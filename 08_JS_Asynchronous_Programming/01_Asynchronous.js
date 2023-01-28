const arr = [1,2,3,4,5];

arr.forEach((el)=>{
    console.log(el);
    console.log('sync');
})

function asynFun(myArr, callback){
    myArr.forEach((el)=>{
        setTimeout(callback, 1000, el);
    })
}

asynFun(arr,(val) => {
    console.log(val);
    console.log('async');
})

console.log('test');