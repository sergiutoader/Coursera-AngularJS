(function () {
'use strict';

  // creates an angular module
  // it takes the name of the module and an array of dependencies as parameters
  angular.module('DIApp', [])

  // variables that begin with $ are those provided by angular
  // $scope is the variable used to share data between the view model and the view
  .controller('DIAppController', DIAppController);

// avoids error from minification
DIAppController.$inject = ['$scope', '$filter', '$injector'];

  function DIAppController ($scope, $filter, $injector) {
    $scope.name = "Sergiu";
    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
    // returns an array of the argument names of DIAppController
    console.log($injector.annotate(DIAppController));
  }

})();
