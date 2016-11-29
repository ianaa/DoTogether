angular.module("app", [
  'app.auth',
  'app.events',
  'app.tasks',
  'app.services',
  'ngRoute'
  ])
.config(function($routeProvider){
  $routeProvider
    .when('/events', {
      templateUrl: 'app/events/events.html',
      controller: 'EventsController as events',
      authenticate: false
    })
    .when('/tasks', {
      templateUrl: 'app/tasks/tasks.html',
      controller: 'TasksController',
      authenticate: false
    })
    .when('/signin',{
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController',
      authenticate: false
    })
    .when('/signup',{
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController',
      authenticate: false
    })
    .otherwise('/events')
});