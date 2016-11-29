var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  name: String,
  date: Date
});
var Event = mongoose.model('Event', eventSchema);

module.exports = Event;