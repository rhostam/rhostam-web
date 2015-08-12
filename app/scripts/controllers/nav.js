'use strict';

/**
 * @ngdoc function
 * @name rhostamApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the rhostamApp
 */
(function() {
	angular.module('rhostamApp')
		.controller('NavCtrl', NavCtrl);

	function NavCtrl ($scope, $location, $anchorScroll) {
	    $scope.isActive = isActive;
	    $scope.gotoTop = gotoTop;

	    function isActive(path) {
	    	if ($location.path().substr(0, path.length) === path) { 
	    		if (path === '/' && $location.path() === '/') { 
	    			return true; 
	    		} else if (path === '/') { 
	    			return false; 
	    		} 

	    		return true; 
	    	} else { 
	    		return false;
	    	}
	    }

	    function gotoTop() {
	    	$location.hash('navbar-main');
	    	$anchorScroll();
	    }
	}
})();