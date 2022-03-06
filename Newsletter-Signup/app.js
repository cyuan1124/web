const express = require("express");
const https = require("https");
const parser = require("body-parser");
const app = express();

app.use(parser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
