(function () {

  function resetPasswordProvider ($http) {

      this.resetPassword = function(user) {

        $http.post('http://api.nationsauction.com/auth/User/Update', user).then(function(res){
          message = "post was successful";
          console.log(res)
        }).catch(function(error){
         console.log("DATA: " + data);

        })


        }
  }

  naBaseApp.service("resetPasswordProvider", [ "$http", resetPasswordProvider]);

})();
