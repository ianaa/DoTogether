angular.module('app.events', [])
.controller("EventsController", function(EventsFactory, $location){
  this.new = {
    name: null,
    date: null,
    tasks: []
  };
  this.eventList = [];
  this.curr = EventsFactory.currentEvent;
  this.addEvent = function() {
    EventsFactory.addNew(this.new)
    .then((data)=>{
      this.eventList.push(data);
      this.new.name = '';
    })
  };
  this.getEvents = function() {
    EventsFactory.getAll()
    .then((data) => {
      this.eventList = data;
    })
  };
  this.zoomIn = function(event) {
    EventsFactory.currentEvent = event;
    $location.path('/zoomin');
  };
  this.removeEvent = function(item) {
    var index = this.eventList.indexOf(item);
    console.log(index);
    EventsFactory.deleteEvent(item)
    .then((data) => {
      this.eventList.splice(index, 1);
    })
  };
  this.addTask = function() {
    EventsFactory.changeTask('add', this.curr, this.newTask)
    .then((data) => {
      this.curr.tasks = data;
      this.newTask = '';
    })
  };
  this.removeTask = function(task) {
    EventsFactory.changeTask('remove', this.curr, task)
    .then((data) => {
      console.log(data);
      this.curr.tasks = data;
    })
  };
  this.toggleDone = function(task) {
    EventsFactory.changeTask('done', this.curr, task)
    .then((data) => {
      console.log(data);
      this.curr.tasks = data;
    })
  }

  this.getEvents();
})