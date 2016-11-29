angular.module("app", [
  'app.auth',
  'app.add',
  // 'app.events',
  // 'app.tasks',
  'ngRoute'
  ])
.config(function($routeProvider){
  $routeProvider
    .when('/add', {
      templateUrl: 'app/add/add.html',
      controller: 'AddController',
      authenticate: false
    })
    // .when('/',{
    //   templateUrl:,
    //   controller:,
    //   authenticate: false
    // })
    // .when('/',{
    //   templateUrl:,
    //   controller:,
    //   authenticate: false
    // })
    // .when('/',{
    //   templateUrl:,
    //   controller:,
    //   authenticate: false
    // })
});