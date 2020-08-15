(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyController = this;

    toBuyController.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    toBuyController.checkItem = function (index) {
      ShoppingListCheckOffService.checkItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtItemController = this;

    boughtItemController.alreadyBoughtItems =
      ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuyItems = [ {
        name: "Cookies",
        quantity: 10
      }, {
        name: "Chips",
        quantity: 15
      }, {
        name: "Sugary drinks",
        quantity: 100
      }, {
        name: "Pepto Bismol",
        quantity: 5
      }, {
        name: "Chocolates",
        quantity: 12
      }, {
        name: "Peanuts",
        quantity: 35
      }, {
        name: "Biscuits",
        quantity: 4
      }];

    var alreadyBoughtItems = [];


    service.checkItem = function(index) {
      var item = toBuyItems.splice(index, 1);
      alreadyBoughtItems.push(item[0]);
    }

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    }
  }
})();
