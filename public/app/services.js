angular.module('app.services', [])
.factory('EventsFactory', function($http, $location) {
  var currentEvent = "nothing for now";
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/events'
    }).then((res) => {
      return res.data;
    }, (res) =>{
      console.log("ERROR", res);
    });
  };
  var addNew = function(event) {
    return $http({
      method: 'POST',
      url: 'api/events',
      data: event,
      contentType: 'application/json'
    }).then((res) => {
      return res.data;
    }, (res) =>{
      console.log("ERROR", res);
    });
  };
  var changeTask = function(action, event, task) {
    return $http({
      method: 'POST',
      url: 'api/events/edit-task',
      data: {action: action, event: event, task: task},
      contentType: 'application/json'
    }).then((res) => {
      console.log("response in the factory", res.data);
      return res.data;
    }, (res) => {
      console.log("ERROR", res);
    })
  };

  var deleteEvent = function(event) {
    return $http({
      method: 'POST',
      url: 'api/events/remove',
      data: event,
      contentType: 'application/json'
    }).then((res) => {
      return res.data;
    }, (res) => {
      console.log("ERROR", res);
    })
  }
  return {
    getAll: getAll,
    addNew: addNew,
    currentEvent: currentEvent,
    changeTask: changeTask,
    deleteEvent: deleteEvent
  }
})