var insertModule = angular.module('insertModule', []);

insertModule.controller('ListController', ['$scope', '$http', function($scope, $http){
	//use $http.get() to get the list of students
	$http.get('php/list.php').then(function(response){
		//send back the student data to the list.html view
		$scope.productList = response.data;
	});
}]);
