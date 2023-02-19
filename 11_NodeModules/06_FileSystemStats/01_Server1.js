const fs = require('fs');
const http = require('http');
const dir = './public';
const mainFile = 'new1.html';
const url = `./${dir}/${mainFile}`;
console.log(url);

http.createServer((req, res)=>{
    fs.readFile(url,(err,html)=>{
        res.writeHead(200,{
            'Content-Type':'text/html'
        });
        console.log(html);
        res.write(html);
        return res.end();
    })
    console.log('server running');
}).listen(8080)