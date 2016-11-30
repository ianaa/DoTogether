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
    .then((res)=>{
      this.eventList.push(res);
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
    .then((res) => {
      console.log("Response", res)
      this.curr.tasks = res;
      this.newTask = '';
    })
  };

  this.getEvents();
})