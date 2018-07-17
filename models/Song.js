const mongoose = require(".../db/connection.js"); // requiring connection.js and saving it to a mongoose variable
const Schema = mongoose.Schema; // importing Schema from mongoose.Schema

const Song = new Schema({
  name: String
}); // defining a Song schema using mongoose's .Schema() method

module.exports = mongoose.model("Song", Song); // exporting the schema using module.exports and mongoose model
