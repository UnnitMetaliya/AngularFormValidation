var validationApp = angular.module('validationApp',[]); // create angular validationApp

validationApp.controller('mainController',function($scope){
	
	$scope.submitForm = function(isValid){ //function to submit the form after all validation has occured

		// check to make sure the form is completely valid
		if(isValid){
			alert('our form is amazing');
		}
	};
});