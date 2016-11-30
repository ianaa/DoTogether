angular.module('app.events', [])
.controller("EventsController", function(EventsFactory, $location, $window){
  this.user = $window.user;
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
  this.editTask = function(editParam, task){
    EventsFactory.changeTask(editParam, this.curr, task)
    .then((data) => {
      this.curr.tasks = data;
    })
  }
  this.addTask = function() {
    this.editTask('add', this.newTask);
    this.newTask = '';
  };
  this.removeTask = function(task) {
    this.editTask('remove', task);
  };
  this.claimTask = function(task) {
    task.claimedBy = $window.user;
    this.editTask('claim', task);
  };
  this.toggleDone = function(task) {
    this.editTask('done', task);
  }

  this.getEvents();
})