(function () {

    function vehicleInventoryProvider ($http, $location) {


    this.getVehicleByOwnerID = function (callback){
      // if(localStorage.userId){
      //    var ownerGuid = localStorage.userId
      //    console.log('this is coming from public controller', ownerGuid)
      //  }

      console.log("owner id", ownerGuid)

      var ownerGuid = "617a69c3-bd34-445c-a762-1bbcf228f7bb"
      // var ownerGuid = "5de6dd75-2957-407d-b024-216ab34cfc68"

        var vehicleListData = JSON.stringify({
          'submitter': "submitter",
          'ownerGuid': ownerGuid,
          'activity': 'getbyowner'
        })


        $http({
			    url: 'http://api.nationsauction.com/inventory/Vehicle/GetByOwner',
			    method: "POST",
			    data: vehicleListData,
			    headers: {'Content-Type': 'application/json'}
  			})
          .success(function (data, status, headers, config) {
    				// console.log("DEBUG => data > " + data);
    				var testData = JSON.parse(data);

    				// console.log("DEBUG => testData > " + JSON.stringify(testData));
    			    callback(null, testData);
    			})
          .error(function (data, status, headers, config) {
    			    callback(data);
    			});
  		};



    this.editVehicle = function (editedVehicleData){
        // console.log('passed updated vehicle', editedVehicleData)

        $http.post('http://api.nationsauction.com/inventory/Vehicle/Update', editedVehicleData)
          .then(function(response){
            console.log("vehicle updated!", response)
          })
          .catch(function(error){
            console.log("Unable to Add condition, error: ", error)
          })
    }


    this.addVehiclePricing = function(vehiclePricingData){

      console.log("Vehicle_add/vehicleProvider lin 6", vehiclePricingData)
      // $scope.loading=true;
      $http.post('http://api.nationsauction.com/inventory/Vehicle/Add', vehiclePricingData)
        .then(function(response){
          console.log('this is Vehicle Pricing response: ', response)
          // $scope.loading=false;

          if (response.status === 200 && JSON.parse(response.data).status === "FAIL") {
            return false
          } else {
          }

        })
        .catch(function(error){
          console.log("Unable to Add Vehicle Pricing, error: ", error)
        })


    }

    this.addDamageData = function(damageData){
      // console.log('passed DamageData', damageData)

      $http.post('http://api.nationsauction.com/inventory/Vehicle/DamageAdd', damageData)
        .then(function(response){
          console.log("interiorDamageData & exteriorDamageData Posted!", response)
          if (response.status === 200 && JSON.parse(response.data).status === "FAIL") {
            return false
          } else {
          }
        })
        .catch(function(error){
          console.log("unable to add interior & exterior damage", error)
        })

    }


    this.getAllConditionReports = function (callback){

        var vehicleListData = JSON.stringify({
          'submitter': "test",
          'activity': 'getall'
        })


        $http({
          url: 'http://api.nationsauction.com/inventory/Vehicle/CRGetAll',
          method: "POST",
          cache: 'false',
          data: vehicleListData,
          headers: {'Content-Type': 'application/json'}
        })
          .success(function (data, status, headers, config) {
            // console.log("DEBUG => data > " + data);
            var testData = JSON.parse(data);

            // console.log("DEBUG => testData raw > " + testData);
            // console.log("DEBUG => testData > " + JSON.stringify(testData));
              callback(null, testData);
          })
          .error(function (data, status, headers, config) {
              callback(data);
          });
      };


      this.addConditionData = function(conditionData, callback){
         // console.log('passed conditionDatadata', conditionData)
         $http({
           url: 'http://api.nationsauction.com/inventory/Vehicle/CRAdd',
             method: "POST",
             cache: 'false',
             data: conditionData,
             headers: {'Content-Type': 'application/json'}
           })
           .success(function (data, status, headers, config) {
             var condD = JSON.parse(data)
               callback(null,condD)
               $location.path("/index")

           })
          .error(function (data, status, headers, config) {

              callback(status);

          });
      }


    };
    naBaseApp.service("vehicleInventoryProvider", [ "$http", "$location", vehicleInventoryProvider]);

})();
