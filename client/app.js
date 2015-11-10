angular.module('foodrApp', [
  'ngResource',
  'foodrApp.description',
  'foodrApp.swipes'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'swipes/swipes.html',
    controller: 'swipeCtrl'
  })
  .when('/description' {
    templateUrl: 'description/description.html',
    controller: 'descriptionCtrl'
  })

})