angular.module('foodrApp', [
  'foodrApp.description',
  'foodrApp.swipes',
  'ngRoute',
  'ngResource'
])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'swipes/swipes.html',
    controller: 'swipeCtrl'
  })
  .when('/description', {
    templateUrl: 'description/description.html',
    controller: 'swipeCtrl'
  })
}])
.factory('test', function(){
  return {idx: 0}
})

