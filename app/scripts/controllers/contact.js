'use strict';

/**
 * @ngdoc function
 * @name rhostamApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the rhostamApp
 */
(function() {
    angular.module('rhostamApp')
        .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl($scope, $http) {
        $scope.result = 'hidden';
        $scope.resultMessage;
        $scope.formData; //formData is an object holding the name, email, subject, and message
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
        $scope.submit = function(contactform) {
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            console.log($scope.formData);
            if (contactform.$valid) {
                $.ajax({
                    url: "//formspree.io/support@rhostam.com", 
                    method: "POST",
                    data: $.param($scope.formData), //param method from jQuery
                    dataType: "json"
                }).success(function(data) {
                    console.log(data);
                    console.log(data.success);
                    if (data.success) { //success comes from the return json object
                        console.log('it\'s a success!');
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = data.message;
                        $scope.result = 'bg-success';
                    } else {
                        console.log('it\'s a failure!');
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result = 'bg-danger';
                    }
                });
            } else {
                console.log('it\'s a complete failure!');
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
                $scope.result = 'bg-danger';
            }
        };
    }
})();