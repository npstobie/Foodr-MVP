angular.module('foodrApp.swipes', [])

.controller('swipeCtrl', function($scope, $http, $resource) {
    
    $scope.data = [];

    var FoodData = $resource('/api/food');

    FoodData.query(function(results){
      for (var i=1; i<results.length; i++) {
        $scope.data.push(results[i])
      }
    })

    $scope.name = "nick"

    var FoodPlaces = $resource('/api/food');

    FoodPlaces.query(function(results){
      for (var i=0; i<results.length; i++) {
        $scope.data.push(results[i])
      }
    })



    // var FoodPlace = $resource('/api/food');

    


      // places.getPlacesNearMe()
      //   .then(function (places) {
      //     $scope.places = places;
      //     console.log($scope.places);
      //   });
      // }  
  });
