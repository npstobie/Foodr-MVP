angular.module('foodrApp.swipes', [])

.controller('swipeCtrl', function($scope, $http, $resource, $location, test) {
    
    $scope.data = [];

    var FoodData = $resource('/api/food');

    $scope.idx = test.idx;

    FoodData.query(function(results){
      for (var i=1; i<results.length; i++) {
        $scope.data.push(results[i])
      }
      $scope.name = $scope.data[$scope.idx].name;
      $scope.image = $scope.data[$scope.idx].image;
      $scope.price = $scope.data[$scope.idx].price;
      $scope.address = $scope.data[$scope.idx].address;
      $scope.review = $scope.data[$scope.idx].review;
    });

    $scope.next = function() {
      test.idx++;
      $scope.idx = test.idx;
      $scope.name = $scope.data[$scope.idx].name;
      $scope.image = $scope.data[$scope.idx].image;
      $scope.price = $scope.data[$scope.idx].price;
      $scope.address = $scope.data[$scope.idx].address;
      $scope.review = $scope.data[$scope.idx].review;
    }

    $scope.describe = function() {
      $location.path('/description')
    } 

    $scope.back = function() {
      $scope.next();
      $location.path('/')
    }

  });
