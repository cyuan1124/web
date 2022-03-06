const express = require("express");
const https = require("https");
const parser = require("body-parser");
const app = express();

app.use(parser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const cityName = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1560015270d2d55f426a385446db9bbd&units=metric";
  https.get(url, response => {
    response.on("data", data => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>The weather is currently " +  weatherDescription + "</p>");
      res.write("<h1>The temperature in " + cityName + " is " + temp + " degree Celcius.</h1>");
      res.write("<img src=" + imageURL + " >");
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
