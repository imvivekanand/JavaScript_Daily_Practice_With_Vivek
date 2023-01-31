const http = require("http");

// console.log(http);

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    // res.write("Hello");
    // res.write("World");
    // res.write(`<br> URL = ${req.url}`);
    if(req.url == '/'){
        res.write('Main Landing Page');
    }
    else if(req.url == '/test'){
        res.write('Test page');
    }
    else{
        res.write('Page not FOUND');
    }
    res.end();
  })
  .listen(8080);
//8080 is port localhost:880

console.log("Server Running...");
