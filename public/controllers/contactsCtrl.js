app.controller('contactsController', ['$scope','$resource', function($scope,$resource){
	//$scope.contacts = [{ "name" : "hi","number":"987456" }];
	$scope.contacts = [];
	$scope.showWarning = 0;

	var Contacts =$resource('/api/contacts');

	Contacts.query(function(result){
		$scope.contacts = result;
	});

	$scope.addContact = function(){

		if($scope.contactName != '' && $scope.contactMobile != '' ){

			var contacts = new Contacts();
			contacts.name = $scope.contactName;
			contacts.mobile=$scope.contactMobile;
			contacts.$save(function(result){
				$scope.contacts.push(result);
			});
			
			$scope.contactName = '';
			$scope.contactMobile = ''; 
			$scope.showWarning = 0;
			
		}
		else{

			$scope.showWarning = 1;
			$scope.warning = 'Please fill the form to submit';

		}
	}

}]);