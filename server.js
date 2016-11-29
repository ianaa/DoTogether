var express = require('express');
var parser = require('body-parser');
var path = require('path');
var mongoose = require ('mongoose');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(parser.json());
require('./routes/routes.js')(app,express);

mongoose.connect('mongodb://iana:todo@ds115798.mlab.com:15798/dotogether');
var db = mongoose.connection;

db.on('error', (err) => {
  console.error("db connection error:", err);
})

db.once('open', function() {
  console.log('MongoDB connected');
  app.listen(PORT, function(){
    console.log(`DoTogether server listening on port ${PORT}!`)
  });
})
