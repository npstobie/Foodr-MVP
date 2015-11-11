angular.module('foodrApp.swipes', [])

.controller('swipeCtrl', function($scope, $http, $resource, $location, test, $sce) {
    
    $scope.data = [];

    var FoodData = $resource('/api/food');

    $scope.idx = test.idx;

    FoodData.query(function(results){
      console.log(results);
      for (var i=1; i<results.length; i++) {
        $scope.data.push(results[i])
      }
      $scope.name = $scope.data[$scope.idx].name;
      $scope.image = $scope.data[$scope.idx].image;
      $scope.price = $scope.data[$scope.idx].price;
      $scope.address = $scope.data[$scope.idx].address;
      $scope.review = $scope.data[$scope.idx].review;
      $scope.mapView = $scope.data[$scope.idx].map;
    });

    $scope.next = function() {
      if (test.idx < 4){
        test.idx++;
      } else {
        test.idx = 0;
      }
      $scope.idx = test.idx;
      $scope.name = $scope.data[$scope.idx].name;
      $scope.image = $scope.data[$scope.idx].image;
      $scope.price = $scope.data[$scope.idx].price;
      $scope.address = $scope.data[$scope.idx].address;
      $scope.review = $scope.data[$scope.idx].review;
      $scope.mapView = $scope.data[$scope.idx].map;
    }

    $scope.describe = function() {
      $location.path('/description');
      var iframe = document.createElement('iframe');
      iframe.src = $scope.mapView
      console.log(iframe);
      setTimeout(function(){document.getElementById("maps").appendChild(iframe)},10)
    } 

    $scope.back = function() {
      $location.path('/');
    }

  });
