angular.module('app.events', [])
.controller("EventsController", function(EventsFactory){
  this.new = {
    name: null,
    date: null,
    tasks: []
  };
  this.eventList = [ { name: "AfterCumulative Party",
                       date: "Dec 03, 2016",
                       tasks: [{done: false, claimedBy: null, todo: "bring beer"},
                               {done: false, claimedBy: null, todo: "bring chips"}]  } ];

  this.addEvent = function() {
    Eventsfactory.addNew(this.new)
    .then((res)=>{
      console.log(res);
    })
  };
  this.getEvents = function() {
    EventsFactory.getAll()
    .then((data) => {
      this.eventList = data;
    })
  }
  this.getEvents();
})