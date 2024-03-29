//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extend: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("pt-BR", options);


  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
