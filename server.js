var express = require('express');
var parser = require('body-parser');
var path = require('path');
var mongoose = require ('mongoose');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.send("GET request to the homepage");
});
app.post('/', (req, res) => {
  res.send("POST request to the homepage");
});

app.listen(PORT, function(){
  console.log(`DoTogether server listening on port ${PORT}!`)
});