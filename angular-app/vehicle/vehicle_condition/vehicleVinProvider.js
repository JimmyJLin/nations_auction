(function () {

    function vehicleVinProvider ($http) {


    this.getAllVehicle = function (callback){

        var vehicleListData = JSON.stringify({
          'submitter': "test",
          'activity': 'getall'
        })


        $http({
          url: 'http://api.nationsauction.com/inventory/Vehicle/GetAll',
          method: "POST",
          cache: 'false',
          data: vehicleListData,
          headers: {'Content-Type': 'application/json'}
        })
          .success(function (data, status, headers, config) {
            console.log("DEBUG => data > " + data);
            var testData = JSON.parse(data);

            console.log("DEBUG => testData raw > " + testData);
            console.log("DEBUG => testData > " + JSON.stringify(testData));
              callback(null, testData);
          })
          .error(function (data, status, headers, config) {
              callback(data);
          });
  		};

    }

    naBaseApp.service("vehicleVinProvider", [ "$http", vehicleVinProvider]);

})();
