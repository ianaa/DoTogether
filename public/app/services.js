angular.module('app.services', [])
.factory('EventsFactory', function($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/events'
    }).then((res) => {
      console.log(res.data);
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
      console.log(res.data);
      return res.data;
    }, (res) =>{
      console.log("ERROR", res);
    });
  };
  var addTask = function(task) {
    
  }
  return {
    getAll: getAll,
    addNew: addNew
  }
})