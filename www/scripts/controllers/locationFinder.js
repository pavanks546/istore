/**
 * Created by ITRON on 12/23/2015.
 */

app.controller('locationFinderController',['$scope', '$state', '$ionicSideMenuDelegate', 'Products','stripeCheckout', function($scope, $state, $ionicSideMenuDelegate, Products, stripeCheckout){

  var marker;
   var mapCanvas = document.getElementById('map-canvas');
   var mapOptions = {
   center : new google.maps.LatLng(17.442100353311528, 78.44476461410522),
   zoom : 17,
   mapTypeId : google.maps.MapTypeId.ROADMAP
   }
   var map = new google.maps.Map(mapCanvas, mapOptions)
   marker = new google.maps.Marker({
   position : mapOptions.center,
   map : map
   });
   google.maps.event.addListener(map, 'click', function(event) {
   if (marker) {
   marker.setPosition(event.latLng);
   }
   document.getElementById('position').innerHTML = marker.position;
   });


  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);
