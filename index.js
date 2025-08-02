const express = require("express");
const { Person } = require("./Person.js");
const app = express();
// require("./modules/path.js");
// require("./modules/fs.js");

const person = new Person("Mário");
console.log(person.sayMyName());

app.get("/", (req, res) => {
  res.send("ola");
});

app.listen(3000, () => console.log("Rodando servidor"));
