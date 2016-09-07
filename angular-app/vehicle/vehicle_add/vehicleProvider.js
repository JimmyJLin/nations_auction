(function () {

    function vehicleProvider ($http, $location) {

      this.addVehicleAndSave = function(addVehicleData){
        console.log("Vehicle_add/vehicleProvider from addVehicle", addVehicleData)
        // $scope.loading=true;
        $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
            // $scope.loading=false;

            if (response.status === 200 && JSON.parse(response.data).status === "SUCCESS") {
              console.log("vehicleprovider.addVehicle firing")
              $location.path("/index")
              return true

            } else {
              console.log("addVhiecle NOT posted!1", error)
            }

          })
          .catch(function(error){
            console.log("Unable to Add vehicle, error: ", error)
          })

      }

      this.addVehicleAndContinue = function(addVehicleData){
        console.log("Vehicle_add/vehicleProvider from addVehicleAndContinue", addVehicleData)
        // $scope.loading=true;
        $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
            // $scope.loading=false;

            if (response.status === 200 && JSON.parse(response.data).status === "SUCCESS") {
              console.log("vehicleprovider.addVehicleAndContinue firing")

              $location.path("/vehicle/condition/new")
              return false

            } else {
              console.log("addVehicleAndContinue NOT posted!1", error)

            }

          })
          .catch(function(error){
            console.log("Unable to Add vehicle, error: ", error)
          })

      }



    }

    naBaseApp.service("vehicleProvider", [ "$http", "$location", vehicleProvider]);

})();
