var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
var shortid = require('shortid');

var eventSchema = mongoose.Schema({
  name: String,
  date: Date,
  tasks: [],
  _id: {
    type: String,
    'default': shortid.generate
  }
});
var Event = mongoose.model('Event', eventSchema);

module.exports = Event;