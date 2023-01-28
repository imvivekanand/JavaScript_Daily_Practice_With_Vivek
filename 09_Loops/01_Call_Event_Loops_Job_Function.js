//Js single thread

function test1(){
    return test1(); //recursive function
}
// console.log('one');
//test(1);
// console.log('two');

//Event loop checks call stack - 

const one = () => console.log('one'); //4
const two = () => console.log('two'); //6

const test2 = () => {
    console.log('three'); //2
    one(); //3
    two(); //5
}

const test3 = () => {
    console.log('three'); //2
    setTimeout (one, 0); //3
    two(); //5
}

test3(); //1

//event loop give priority to call stack - only once the stack is completed and nothing is there then it checks the queue.