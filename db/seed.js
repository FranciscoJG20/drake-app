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
