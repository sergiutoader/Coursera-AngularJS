(function () {
'use strict';

  // creates an angular module
  // it takes the name of the module and an array of dependencies as parameters
  angular.module('NameCalculator', [])

  // variables that begin with $ are those provided by angular
  // $scope is the variable used to share data between the view model and the view
  .controller('NameCalculatorController', function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;

    // functie care atribuie variabilei totalValue rezultatul obtinut
    // in urma apelului functiei calculateNumericForString pe name
    $scope.displayNumeric = function() {
      $scope.totalValue = calculateNumericForString($scope.name);
    }

    // functie care calculeaza valoarea numerica pentru un string
    function calculateNumericForString(string) {
      let total = 0;
      for(let i = 0; i < string.length; i++) {
        total += string.charCodeAt(i);
      }
      return total;
    }
  });
})();
