(function () {

    function vehicleDetailsProvider ($http) {


    this.vehicleDisplay = function (vehicleGuid, callback){

      ;  // vehicle ID

        var singleVehicle = JSON.stringify({
          'submitter': "submitter",
          'guid': vehicleGuid,
          'activity': 'getbyid'
        })


        $http({
          url: 'http://api.nationsauction.com/inventory/Vehicle/GetByID',
          method: "POST",
          cache: 'false',
          data: singleVehicle,
          headers: {'Content-Type': 'application/json'}
        })
          .success(function (data, status, headers, config) {
            console.log('SUCCESS FROM THE PROVIDER',  data);

            var vehicle = JSON.parse(data);

            callback(null, data);
          })
          .error(function (data, status, headers, config) {
              callback(data);
          });
  		};


    }

    naBaseApp.service("vehicleDetailsProvider", [ "$http", vehicleDetailsProvider]);

})();
