(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.hungerState = "hungry";
  $scope.sayMessage = function() {
    return "Yaakov likes to eat healthy snacks at night!";
  }
  $scope.feedMe = function() {
    if($scope.hungerState == "fed"){
      $scope.hungerState = "hungry";
    } else {
      $scope.hungerState = "fed";
    }
  }
}

})();
