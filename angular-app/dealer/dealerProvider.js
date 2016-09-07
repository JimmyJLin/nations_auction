(function () {

  function dealerProvider ($http) {

      this.registerDealer = function(user) {

        $http.post('http://api.nationsauction.com/auth/User/Add', user).then(function(res){
          message = "post was successful";
          console.log(res)
        }).catch(function(error){
         console.log("DATA: " + data);

        })


        }
  }

  naBaseApp.service("dealerProvider", [ "$http", dealerProvider]);

})();
