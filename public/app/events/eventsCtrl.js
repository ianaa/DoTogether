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
  this.addTask = function() {
    EventsFactory.addToEvent(this.curr, this.newTask)
    .then((data) => {
      this.curr.tasks = data;
      this.newTask = '';
    })
  };
  this.removeEvent = function(item) {
    var index = this.eventList.indexOf(item);
    console.log(index);
    EventsFactory.deleteEvent(item)
    .then((data) => {
      console.log("removed", data)
      this.eventList.splice(index, 1);
    })
  };

  this.getEvents();
})