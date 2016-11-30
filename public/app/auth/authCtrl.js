angular.module('app.auth', [])
  .controller("AuthController", function ($window) {
    this.user = $window.user;
    this.signedIn = false;
  })
  .directive('navBar', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'nav.html'
    }
  })