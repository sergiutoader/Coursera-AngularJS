(function () {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: '../foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var menu = this;

  // user has entered input and no items were found
  menu.emptyList = function() {
    return ((menu.found != undefined) && (menu.found.length === 0));
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm = "";

  menu.filterItems = function() {
    MenuSearchService.getMatchedMenuItems(menu.searchTerm)
    .then(function(response) {
        menu.found = response;
      });
  }

  menu.removeItem = function(index) {
    menu.found.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function(response) {
      var allItems = response.data.menu_items;
      // process result and only keep items that match
      var foundItems = [];

      if(searchTerm == undefined || searchTerm == "") {
        return foundItems;
      }

      for(let i = 0; i < allItems.length; i++) {
        if(allItems[i].description.toLowerCase()
          .indexOf(searchTerm.toLowerCase()) !== -1) {
          foundItems.push(allItems[i]);
        }
      }
      // return processed items
      return foundItems;
    });
    return promise;
  }
}

})();
