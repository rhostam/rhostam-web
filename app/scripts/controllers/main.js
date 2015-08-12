'use strict';

/**
 * @ngdoc function
 * @name rhostamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rhostamApp
 */
(function() {
	angular.module('rhostamApp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl ($scope, $location, $anchorScroll) {
	    $scope.gotoTop = gotoTop;

	    function gotoTop() {
	    	$location.hash('navbar-main');
	    	$anchorScroll();
	    }
	}
})();
