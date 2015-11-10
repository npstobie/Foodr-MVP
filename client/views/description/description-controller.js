angular.module('foodrApp.description', [])

.controller('descriptionCtrl', ['$scope', '$resource',
  function($scope, $resource, places) {
    $scope.fetch = function(){
    places.getPlacesNearMe()
      .then(function (places) {
        $scope.places = places;
        console.log($scope.places);
      })
    }  
  }])

function getPlacesNearMe () {
  return $http
    .get(url)
    .then(function (res) {
      return res.data;
    })
}