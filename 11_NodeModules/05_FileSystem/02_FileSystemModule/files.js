const { log } = require('console');
const fs = require('fs');
// console.log(fs);

const dir = './public';
let tempCounter = 1;
let newFileName = `new${tempCounter}.html`;

fs.readdir(dir, (err, files)=>{
    console.log(files);
    console.log(files.length);
    console.log(err);
    tempCounter = files.length + 1;
    newFileName = `new${tempCounter}.html`
    createNewFile(newFileName);
})

function createNewFile(fileName){
    
}