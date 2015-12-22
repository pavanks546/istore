  app.controller('searchFilterController',[
    '$scope',
    '$state',
    '$ionicSideMenuDelegate',
    'stripeCheckout',
    function($scope,$state, $ionicSideMenuDelegate,  stripeCheckout) {

    $scope.data = {
      "filter" : 'cat',
      "animals": [
        {
          type : "cat",
          name : "Persian"
        },
        {
          type : "cat",
          name : "Siamese"
        },
        {
          type : "dog",
          name : "Labrador"
        },
        {
          type : "dog",
          name : "Mallamute"
        },
        {
          type : "bird",
          name : "Cockateel"
        },
        {
          type : "bird",
          name : "Parrot"
        },
        {
          type : "bird",
          name : "Starling"
        },

      ]
    };

  }]);
