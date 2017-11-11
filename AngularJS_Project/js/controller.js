var insertModule = angular.module('insertModule', []);
var isLiked = false;
var isDisliked = false;

insertModule.controller('ListController', ['$scope', '$http', function($scope, $http){

	$scope.plusOne = function(index) {
			var data = {
				id : $scope.productList[index].product_id
			}

			var like1 = parseInt($scope.productList[index].likes) + 1;
			$scope.productList[index].likes = like1.toString();

			$http.post('php/updateLikes.php', JSON.stringify(data));
 }


 $scope.minusOne = function(index) {
	 var data = {
		 id : $scope.productList[index].product_id
	 }

	 var dislike1 = parseInt($scope.productList[index].dislikes) + 1;
	 $scope.productList[index].dislikes = dislike1.toString();

	 $http.post('php/updateDislikes.php', JSON.stringify(data));
 }

 $scope.undoPlus = function(index) {
	 var data = {
		 id : $scope.productList[index].product_id
	 	 }

	 var like1 = parseInt($scope.productList[index].likes) - 1;
	 $scope.productList[index].likes = like1.toString();

	 $http.post('php/undoLikes.php', JSON.stringify(data));
 }

 $scope.undoMinus = function(index) {
	var data = {
		id : $scope.productList[index].product_id
	}

	var dislike1 = parseInt($scope.productList[index].dislikes) - 1;
	$scope.productList[index].dislikes = dislike1.toString();

	$http.post('php/undoDislikes.php', JSON.stringify(data));
 }

 $scope.toggleLike = function(index) {
	 if (isLiked === false) {
		 isLiked = true;
		 $scope.plusOne(index);
	 }
	 else {
		 isLiked = false;
		 $scope.undoPlus(index);
	 }
 }

 $scope.toggleDislike = function(index) {
	if (isDisliked === false) {
		isDisliked = true;
		$scope.minusOne(index);
	}
	else {
		isDisliked = false;
		$scope.undoMinus(index);
	}
 }

	//use $http.get() to get the list of items
	$http.get('php/list.php').then(function(response){
		//send back the item data to the list.html view
		$scope.productList = response.data;
	});
}]);
