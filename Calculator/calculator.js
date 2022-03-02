const express = require("express")
const parser = require("body-parser");
const app = express()

app.use(parser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  res.send("The result is " + (num1 + num2));
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
