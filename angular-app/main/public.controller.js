angular.module('naBaseApp').controller('PublicController', PublicController)

  // 1. declare our controller.
  function PublicController ($scope, publicProvider) {

      $scope.page_load_error = null;
      $scope.finished_loading = false;

	function init(){
		$scope.finished_loading = true;
	}

      init();
  }

  naBaseApp.controller("PublicController", ['$scope', 'publicProvider', PublicController]);
