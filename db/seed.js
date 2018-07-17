const mongoose = require("../models/Song");
const Song = mongoose.model("Song"); // requiring Song model in two steps
const songData = require("./song-data.json"); // requiring json data

Song.remove({})
  .then(() => {
    Song.collection.insert(songData).then(song => {
      console.log(song);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });

//Wrote Mongoose queries that accomplishes the following...
//1. Clears the database of all data, and .then...
//2. Inserts our seed data into the database, and .then...
//3. Calls process.exit() (which exits the script).
