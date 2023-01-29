const vivek = [2, 4, 6, 8]

const result = vivek.map(function(val, indx, arr){
    console.log(val, indx, arr);
    return val*2;
})

console.log("result", result);