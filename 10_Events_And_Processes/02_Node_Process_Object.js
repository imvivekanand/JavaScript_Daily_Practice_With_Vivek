// Node Process Object Terminal Input Output

// console.log(process.env);

const readLine = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})

readLine.question('What is your name?', name => {
    console.log(name);
    //console.log(process);
    console.log(`Welcome ${name}`);
    readLine.close();
})

process.on('exit', (val)=>{
    console.log(`Process Exiting`);
    console.log(val);
})

process.on('beforeExit', (val)=>{
    console.log(`Before Exit`);
    console.log(val);
})

console.log(`Last Message`);