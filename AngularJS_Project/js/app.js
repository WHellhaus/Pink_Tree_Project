var myApp = angular.module('myApp',
	["ngRoute",
  'insertModule'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/list.html',
		controller: 'ListController'
	})
}]);
