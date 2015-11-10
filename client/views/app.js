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
    controller: 'descriptionCtrl'
  })
}])
// .factory('places', function($http) {
//   var placesObj = {
//     getPlacesNearMe: function() {
//       return $http
//         .get('https://maps.googleapis.com/maps/api/place/radarsearch/json?location=37.783594,-122.409007&radius=1600&types=food&key=AIzaSyBwa_30IwZd8X4DZ_-eeX5YP2YuypkXqx8')
//         .then(function (res) {      
//           return res;
//         })
//     } 
//   }
//   return placesObj;
// });
