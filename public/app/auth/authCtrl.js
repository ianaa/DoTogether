angular.module('app.auth', [])
  .controller("AuthController", function () {
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