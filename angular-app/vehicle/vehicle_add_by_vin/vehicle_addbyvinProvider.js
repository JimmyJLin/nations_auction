(function () {

  function addbyVinProvider ($http, $location) {


      this.getvehiclebyVin = function(vin, callback) {

        var getbyVinData = JSON.stringify({
          'submitter': 'submitter',
          'vin': vin,
          'activity': 'getbyvin'
        })

        $http({
          url: 'http://api.nationsauction.com/inventory/Vehicle/GetByVIN',
          method: "POST",
          cache: 'false',
          data: getbyVinData,
          headers: {'Content-Type': 'application/json'}
        })
          .success(function (data, status, headers, config) {
            var vehicledata = JSON.parse(data)
              callback(null,vehicledata)
          })
          .error(function (data, status, headers, config) {

              callback(status);

          });
  		};

      this.addVehicleAndSave = function(addVehicleData){
        console.log("Provider Line 30", addVehicleData)

        $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', addVehicleData)
          .then(function(response){
            console.log('this is the response', response)
            if (response.status === 200 && JSON.parse(response.data).status === "SUCCESS") {
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

  naBaseApp.service("addbyVinProvider", [ "$http", "$location", addbyVinProvider]);

})();
