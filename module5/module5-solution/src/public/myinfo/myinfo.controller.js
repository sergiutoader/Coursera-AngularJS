(function() {
"use strict";

angular.module('public')
       .controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {
  var myInfoCtrl = this;
  myInfoCtrl.prefItem = SignUpService.prefItem;
  myInfoCtrl.userData = SignUpService.data;

  myInfoCtrl.test = function () {
    console.log(myInfoCtrl.prefItem);
    console.log(myInfoCtrl.userData);
  }
}

})();
