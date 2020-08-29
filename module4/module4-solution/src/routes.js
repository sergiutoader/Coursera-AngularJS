(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })


  // Categories state
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html'
    ,controller: 'CategoriesController as list',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {

        var response = MenuDataService
        .getAllCategories()
        .then(function (resolve){
          return resolve.data;
        });
        return response;
      }]
    }
  })

  // items state
  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      data: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {

        var response = MenuDataService
        .getItemsForCategory($stateParams.itemId)
        .then(function (resolve) {
          return resolve.data;
        });
        return response;
      }]
    }
  });
}

})();
