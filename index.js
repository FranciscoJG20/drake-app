const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.json());

app.get("/", (request, response) => {
  response.send("Hello World");
});

//When Heroku starts your app it will automatically assign a port to process.env.PORT (an environmental variable!)
//to be used in production. We can modify app.listen to
//accomodate Heroku's production port and our own local development port.

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
