(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.controller('ShoppingListRemoveController', ShoppingListRemoveController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}

ShoppingListRemoveController.$inject = ['ShoppingListService'];
function ShoppingListRemoveController(ShoppingListService) {
  var itemRemover = this;

  itemRemover.removeItem = function () {
    ShoppingListService.removeItem(itemRemover.itemIndex - 1);
  }
}

ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (index) {
    if(index >= 0 && index < items.length) {
      items.splice(index, 1);
    }
  }

  service.getItems = function () {
    return items;
  };
}

})();
