
var Event = require('./EventModel.js');
var taskUpdator = function(event, res){
  Event.findOneAndUpdate({_id: event._id}, {tasks: event.tasks}).exec()
    .then((data) => {
      res.send(event.tasks);
    })
    .catch((err) => {
      console.error(err);
    });
};
var taskParser = function(req, res) {
  return {
    event: req.body.event,
    task: req.body.task,
    index: req.body.event.tasks.map((item)=>item.todo).indexOf(req.body.task.todo)
  }
}
var taskActions = {
  'add': function(req, res){
    var event = req.body.event;
    var task = {claimedBy: null, done: false, todo: req.body.task};
    event.tasks.push(task);
    taskUpdator(event, res);
  },
  'remove': function(req, res) {
    thing = taskParser(req, res);
    thing.event.tasks.splice(thing.index, 1);
    taskUpdator(thing.event, res);
  },
  'done': function(req, res) {
    thing = taskParser(req, res);
    thing.event.tasks[thing.index].done = thing.task.done;
    taskUpdator(thing.event, res);
  },
  'claim': function(req, res) {
    thing = taskParser(req, res);
    thing.event.tasks[thing.index].claimedBy = thing.task.claimedBy;
    taskUpdator(thing.event, res);
  }
}

module.exports = {
  addNewEvent: function(req, res){
    var newEvent = new Event(req.body);
    newEvent.save((err, event) => {
      if (err) return console.error(err);
      res.send(event);
    });
  },
  getAllEvents: function(req, res){
    Event.find((err, events) => {
      if (err) return console.error(err);
      res.send(events);
    })
  },
  handleTask: function(req, res) {
    taskActions[req.body.action](req, res);
  },
  removeEvent: function(req, res) {
    var id = req.body._id;
    Event.findOneAndRemove({_id: id}).exec()
    .then((data) =>{
      res.send(data._id);
    })
    .catch((err) =>{
      console.error(err);
    });
  }
}