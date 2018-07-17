const mongoose = require("mongoose"); // requiring mongoose and saving it to a mongoose variable
mongoose.promise = Promise; // setting Mongoose's default Promise library to JavaScript's native Promise

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/drake-baby"); // connecting to mlab database using mongoose.connect()
}

module.exports = mongoose; // exporting connected version of mongoose via module.exports
