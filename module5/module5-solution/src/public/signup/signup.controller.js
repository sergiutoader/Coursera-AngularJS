(function (){
"use strict";

angular.module('public')
      .controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController (SignUpService) {
  var signUpCtrl = this;

  signUpCtrl.user = {};
  signUpCtrl.submitted = (SignUpService.data != undefined);

  signUpCtrl.submit = function() {
    // store user data on SignUp Service
    SignUpService.getItem(signUpCtrl.user).then(function(response) {
      signUpCtrl.errorMessage = "";
      signUpCtrl.submitted = true;
    }).catch(function(error) {
      signUpCtrl.errorMessage = "Error: No such menu number exists";
      signUpCtrl.submitted=false;
    });
  }
}
})();
