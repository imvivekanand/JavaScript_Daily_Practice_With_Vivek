const http = require("http");

const myJson = require("./json1");
console.log(myJson);

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "application/json" });

    res.write(JSON.stringify(myJson));

    res.end();
  })
  .listen(8080);
//8080 is port localhost:880

console.log("Server Running...");
