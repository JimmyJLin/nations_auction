angular.module('naBaseApp').controller('VehiclesVinController', VehiclesVinController);

function VehiclesVinController($scope, vehicleVinProvider){

  var vm = this;
  vm.title= "Vehicles By Vin";
  vm.VIN_REGEXP = /^[a-zA-Z0-9](\w{9}(\w{7})?)?$/;

function get_vehicles_vin(){

  $scope.vehicles =   vehicleVinProvider.getAllVehicle( function(err, vehicles){
        $scope.finished_loading = true;
        if (err) {
            $scope.page_load_error = err.message;
        } else {
              console.log("DEBUG => data --> " + vehicles);
            $scope.vehicles = vehicles;
        }
      });
    }

get_vehicles_vin();

}
