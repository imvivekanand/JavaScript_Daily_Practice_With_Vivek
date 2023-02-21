const fetch = require("node-fetch");

fetch('https://google.com').then(res => res.text()).then(data => console.log(data));

fetch("https://randomuser.me/api/?results=5")
  .then(res = res.json())
  .then(json => {
    json.results.forEach(person => {
        const temp = person.name;
        console.log(`${temp.first} ${temp.last}`);
    })
  });
