//Writing data to the file.
const fs = require('fs');
const fileName = 'test.txt';
const data = fs.readFileSync(fileName, 'utf8');
console.log(data);

const arr = ['red', 'blue', 'green'];

//Updating the data of the file.
// fs.writeFile(fileName, '\nHello! Anand', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('DONE');
//     }
// })
function addMe(data){
fs.appendFile(fileName, '\n${data}', (err)=>{
    if(err) throw err;
    console.log('DONE');
})
}

arr.forEach((ele) => {
    addMe(ele);
})