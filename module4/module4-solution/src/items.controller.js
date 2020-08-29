(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['data'];
function ItemDetailController(data) {
  var item = this;
  item.data = data;
}

})();
