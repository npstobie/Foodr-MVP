angular.module('foodrApp.swipes', [])

.controller('swipeCtrl', function($scope, $http, places) {
    $scope.fetch = function(){
      places.getPlacesNearMe()
        .then(function (places) {
          $scope.places = places;
          console.log($scope.places);
        });
      }  
  });

// https://maps.googleapis.com/maps/api/place/radarsearch/json?location=37.783594,-122.409007&radius=1600&types=food&key=AIzaSyBwa_30IwZd8X4DZ_-eeX5YP2YuypkXqx8