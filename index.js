const express = require("express");
const app = express();
const parser = require("body-parser");

const Song = require("./models/Song");

app.use(parser.json());

// app.get("/", (request, response) => {
//   response.send("Hello World");
// });

// Retrieving songs api

app.get("/", (req, res) => {
  res.redirect("/api/song");
});

app.get("/api/song", (req, res) => {
  Song.find({})
    .then(items => {
      res.json(items);
    })
    .catch(err => {
      console.log(err);
    });
});

//When Heroku starts your app it will automatically assign a port to process.env.PORT (an environmental variable!)
//to be used in production. We can modify app.listen to
//accomodate Heroku's production port and our own local development port.

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
