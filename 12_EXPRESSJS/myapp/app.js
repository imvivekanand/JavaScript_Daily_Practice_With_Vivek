const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

const fileName = "index.html";
const url = path.join(__dirname, 'public', 'index.html');
console.log(url);

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
//   res.sendFile(url);
res.sendFile(fileName);
});

app.get("/test", (req, res) => {
  res.send("<h1>Test</h1>");
});

app.get("/info", (req, res) => {
  res.send("<h1>Info</h1>");
});

//Pattern match
app.get("/ab?cd", (req, res) => {
  res.send("<h1>ABC</h1>");
});

app.get("/ab*de", (req, res) => {
  res.send("<h1>AB__________DE</h1>");
});



//reg exp
app.get(/z/, (req, res) => {
  res.send("<h1>AB__________DE</h1>");
});

//route parameters
app.get('/users/:id/:val', (req, res)=>{
  res.send(req.params)
  console.log(req.params.id);
})

app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});
