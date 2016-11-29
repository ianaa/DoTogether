angular.module('app.events', ['app.auth'])
.controller("EventsController", function(){
  this.new = {
    name: null,
    date: null,
    tasks: []
  };
  this.eventList = [ { name: "AfterCumulative Party",
                       date: "Dec 03, 2016",
                       tasks: [{done: false, claimedBy: null, todo: "bring beer"},
                               {done: false, claimedBy: null, todo: "bring chips"}]  } ];
  this.addEvent = function () {
    this.eventList.push(this.new);
  }
})