(function() {
"use strict"

angular.module('common')
       .service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

  service.getItem = function(item) {
    return $http.get(ApiPath + '/menu_items/' + item.menuNumber + ".json").then(function (response) {
      // save preferred menu item and user info
      service.prefItem = response.data;
      service.storeUserData(item);
      return response.data;
    }, function(error) {
      throw new Error("No such menu number exists.");
    });
  }

  service.storeUserData = function(data) {
    service.data = data;
  }
}
})();
