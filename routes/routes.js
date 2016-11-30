var eventHandler = require('./events/eventHandlers.js');
//var userHandler = require('./users/userHandlers.js');

module.exports = function (app, express){
  app.get('/api/events', eventHandler.getAllEvents);
  app.post('/api/events', eventHandler.addNewEvent);
  app.post('/api/events/add-task', eventHandler.addTaskToEvent);
  app.get('api/events/my-tasks', function() {});
}

var dummyEvents = [{
  name: "AfterCumulative Party",
  date: "Dec 03, 2016",
  tasks: [
    {done: false, claimedBy: null, todo: "bring beer"},
    {done: false, claimedBy: null, todo: "bring chips"}
  ] 
}]