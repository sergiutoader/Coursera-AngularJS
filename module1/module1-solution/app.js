(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "";
  $scope.showMsg = function() {
    // checking if input is empty
    if($scope.itemsString === undefined || $scope.itemsString.length == 0) {
      $scope.message = "Please enter data first";
      // BONUS - Red text color and textbox border
      $scope.messageStyle = {'color': 'red'};
      $scope.textboxStyle = {'border-color': 'red'};
    } else {
      // BONUS - Green text color and textbox border
      $scope.messageStyle = {'color': 'green'};
      $scope.textboxStyle = {'border-color': 'green'};

      let items = $scope.itemsString.split(",");
      let itemCount = items.length;

      // [BONUS] Eliminating empty items
      for(let i = 0; i < items.length; i++) {
        if(items[i].trim().length == 0) {
          itemCount--;
        }
      }

      if (itemCount < 4) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };
}

})();
