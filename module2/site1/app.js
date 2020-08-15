(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFactory)
.filter('truth', TruthFactory);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return lovesFilter(msg);
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

function LovesFactory() {
  return function(message) {
    message = message || ""; // in case message = undefined / null
    return message.replace("likes", "loves");
  }
}

function TruthFactory() {
  return function(string, oldStr, newStr) {
    return string.replace(oldStr, newStr);
  }
}

})();
