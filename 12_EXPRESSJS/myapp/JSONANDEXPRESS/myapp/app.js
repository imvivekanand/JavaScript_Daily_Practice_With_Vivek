const bodyparser = require("body-parser");
const port = process.env.PORT || 8080;
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

const myObj = {
  users: [
    {
      id: 1,
      name: "Vivek",
    },
    {
      id: 2,
      name: "Anand",
    },
    {
      id: 3,
      name: "Winter",
    },
  ],
};
console.log(myObj);

app.get("/users", (req, res) => {
  res.json(myObj);
});
