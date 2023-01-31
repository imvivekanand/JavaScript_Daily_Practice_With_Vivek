const test1 = function(){
    console.log('test1 - Hydra');
}

const person = {
    first: 'Vivek',
    last: 'Anand'
}

// test1();

// //const test1 = 'hello';

// // console.log(module);
// console.log(module.filename);
// console.log(module.loaded);
// console.log(module.path);

exports.test1 = test1;
exports.person = person;