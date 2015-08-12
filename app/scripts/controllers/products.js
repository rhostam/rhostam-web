'use strict';

/**
 * @ngdoc function
 * @name rhostamApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the rhostamApp
 */
angular.module('rhostamApp')
  .controller('ProductsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
