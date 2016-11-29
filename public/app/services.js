angular.module('app.services', [])
.factory('EventsFactory', function($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/events'
    }).then((res) =>{
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
    }).then((res) =>{
        return res;
    }, (res) =>{
      console.log("ERROR", res);
    });
  }
  return {
    getAll: getAll,
    addNew: addNew
  }
})