(function () {

    function addConditionProvider ($http, $location) {

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

      // this.addConditionData = function(conditionData){
      //   console.log('passed conditionDatadata', conditionData)
      //   var crGuid = ""
      //   $http.post('http://api.nationsauction.com/inventory/Vehicle/CRAdd', conditionData)
      //     .then(function(response){
      //       // console.log("Condition posted!", response)
      //
      //       if (response.status === 200 && JSON.parse(response.data).status === "SUCCESS") {
      //         // return response.data
      //         var crGuid = JSON.parse(response.data).message
      //         // console.log("Condition Report Posted!", response)
      //         console.log("this is the crGuid from provider", crGuid)
      //         return false
      //         $location.path("/index")
      //       } else {
      //         console.log("Conditioning Report NOT posted!!!", error)
      //       }
      //
      //     })
      //     .catch(function(error){
      //       console.log("Unable to Add condition, error: ", error)
      //     })
      //
      // }

      this.addDamageData = function(damageData){
        console.log('passed DamageData', damageData)

        $http.post('http://api.nationsauction.com/inventory/Vehicle/DamageAdd', damageData)
          .then(function(response){
            console.log("interiorDamageData & exteriorDamageData Posted!", response)
            // $scope.loading=false;

          })
          .catch(function(error){
            console.log("unable to add interior & exterior damage", error)
          })

      }



    }

    naBaseApp.service("addConditionProvider", [ "$http", "$location", addConditionProvider]);

})();
