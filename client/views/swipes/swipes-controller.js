angular.module('foodrApp.swipes', [])

.controller('swipeCtrl', function($scope, $http, $resource) {
    
    $scope.data = [];

    var FoodData = $resource('/api/food');

    $scope.idx = 0;

    FoodData.query(function(results){
      for (var i=1; i<results.length; i++) {
        $scope.data.push(results[i])
      }
      $scope.name = $scope.data[$scope.idx].name;
      $scope.image = $scope.data[$scope.idx].image;
      $scope.price = $scope.data[$scope.idx].price;
    });

    $scope.next = function() {
      $scope.idx++;
      $scope.name = $scope.data[$scope.idx].name;
      $scope.image = $scope.data[$scope.idx].image;
      $scope.price = $scope.data[$scope.idx].price;
    }


    // var FoodPlace = $resource('/api/food');

    


      // places.getPlacesNearMe()
      //   .then(function (places) {
      //     $scope.places = places;
      //     console.log($scope.places);
      //   });
      // }  
  });
