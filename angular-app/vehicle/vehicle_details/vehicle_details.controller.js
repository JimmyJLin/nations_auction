angular.module('naBaseApp').controller('VehicleDetailsController', VehicleDetailsController);


function VehicleDetailsController($routeParams, $scope, vehicleDetailsProvider){
  var vm = this;
  var vehicleID = $routeParams.vehicleID;
  console.log('this is the vehicle ID', vehicleID)

  $scope.vehicle = vehicleDetailsProvider.vehicleDisplay( vehicleID, function(err, vehicle){
      $scope.finished_loading = true;
      if (err) {
          $scope.page_load_error = err.message;
      } else {
           $scope.vehicle = vehicle;
           console.log("controller Vehicle " + vehicle);
           vm.vehicle = JSON.parse(vehicle)
      }
  })
}
