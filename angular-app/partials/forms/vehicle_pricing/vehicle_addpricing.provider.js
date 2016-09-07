(function () {

  function vehiclePricingProvider($http, $location){

    this.addVehiclePricing = function(vehiclePricingData){

      console.log("Vehicle_add/vehicleProvider lin 6", vehiclePricingData)
      // $scope.loading=true;
      $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', vehiclePricingData)
        .then(function(response){
          console.log('this is Vehicle Pricing response: ', response)
          // $scope.loading=false;

          if (response.status === 200 && JSON.parse(response.data).status === "FAIL") {
            return false
            $location.path("/index")

          } else {
          }

        })
        .catch(function(error){
          console.log("Unable to Add Vehicle Pricing, error: ", error)
        })


    }

  }


  naBaseApp.service("vehiclePricingProvider", [ "$http", "$location", vehiclePricingProvider]);

})();
