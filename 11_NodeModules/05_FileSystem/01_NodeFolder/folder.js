const fs = require("fs");
const folderName = "public3";

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("folder Made");
  } else {
    console.log("folder exists");
  }
} catch (err) {
  console.log(err);
}

const folderPath = `./${folderName}`;

fs.writeFile(folderPath+'/index.html', '<h1>Hello World</h1>',(err)=>{
    if(err) throw err;
    console.log('file created');
})

let val1 = fs.readdirSync(folderPath);
console.log(val1);
