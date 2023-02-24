const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const router = express.Router();
const app = express();
const url = require("./secret.js");

app.use(bodyParser.json());

// MongoClient.connect(url,(err,db)=>{
//     if(err) throw err;
//     console.log('Connected');
//     db.close();
// })

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const myDB = client.db("people").collection("friends");

  app.get('/users/:name', (req,res)=>{
    console.log(req.params);
  })

  app
    .route("/users")
    .get((req, res) => {
        myDB.find().toArray().then(results =>{
            console.log(results);
            res.contentType('application/json');
            res.send(JSON.stringify(results))
        })
    })
    .post((req, res) => {
      myDB.insertOne(req.body).then((results) => {
        console.log(req.body);
        res.contentType("application/json");
        res.send(JSON.stringify(req.body));
      });
    })
    .put((req, res) => {})
    .delete((req, res) => {});
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(8080, () => {
  console.log("server ready");
});
