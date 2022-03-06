const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
 var today = new Date();
 var currentDay = today.getDay();
 var day = (currentDay === 6 || currentDay === 0) ? "weekend" : "weekday";
 res.render("list", {kindOfDay: day});
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
