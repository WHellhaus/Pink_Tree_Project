var myApp = angular.module('myApp',[
	'ngRoute',
  'insertModule'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/list.html',
		controller: 'ListController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
