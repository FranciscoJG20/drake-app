const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

const Song = require("./models/Song");

app.use(parser.json());
app.use(cors());

// redirecting landing page to api/songs page
app.get("/", (req, res) => {
  res.redirect("/api/song");
});

// Retrieving songs
app.get("/api/song", (req, res) => {
  Song.find({})
    .then(items => {
      res.json(items);
    })
    .catch(err => {
      console.log(err);
    });
});

// posting a new song
app.post("/api/song", (req, res) => {
  Song.create({
    name: req.body.name
  })
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      console.log(err);
    });
});

// create delete
// find song by id
// .then add delete method
// send response (console log or "hey you just deleted song")
// .catch for errors

app.delete("/api/song/:id", (req, res) => {
  Song.findByIdAndRemove(req.params.id).then(song => {
    if (!song) {
      return res.status(404).send({
        message: "Song not found with id" + req.params.id
      });
    }
    res.send({ message: "Note deleted successfully" }).catch(err => {
      console.log(err);
    });
  });
});

//When Heroku starts your app it will automatically assign a port to process.env.PORT (an environmental variable!)
//to be used in production. We can modify app.listen to
//accomodate Heroku's production port and our own local development port.

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
