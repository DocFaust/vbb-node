// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log("Listening to " + port);
});
