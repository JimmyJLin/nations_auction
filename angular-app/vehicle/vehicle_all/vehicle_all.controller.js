angular.module('naBaseApp').controller('VehiclesAllController', VehiclesAllController);

function VehiclesAllController($scope, vehicleAllProvider){

  var vm = this;
  vm.title= "All Vehicles";

  $scope.loading=true;

  $scope.vehicles =   vehicleAllProvider.getAllVehicle( function(err, vehicles){
        $scope.finished_loading = true;
        if (err) {
            $scope.page_load_error = err.message;
        } else {
              // console.log("DEBUG => data --> " + vehicles);
            $scope.vehicles = vehicles;
            $scope.loading=false;

        }
      });


}
