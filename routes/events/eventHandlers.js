
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
var taskActions = {
  'add': function(req, res){
    var event = req.body.event;
    var task = {claimedBy: null, done: false, todo: req.body.task};
    event.tasks.push(task);
    taskUpdator(event, res);
  },
  'remove': function(req, res) {
    var event = req.body.event;
    var task = req.body.task;
    var index = event.tasks.map((item)=>item.todo).indexOf(task.todo);
    event.tasks.splice(index, 1);
    taskUpdator(event, res);
  },
  'done': function(req, res) {
    var event = req.body.event;
    var task = req.body.task;
    var index = event.tasks.map((item)=>item.todo).indexOf(task.todo);
    event.tasks[index].done = task.done;
    taskUpdator(event, res);
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