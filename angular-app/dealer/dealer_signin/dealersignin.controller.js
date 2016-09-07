angular.module('naBaseApp').controller('DealerSigninController', DealerSigninController)


  function DealerSigninController ($scope, $http, $location, $window, AuthFactory) {
    var vm = this;
    vm.EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    vm.PASS_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/;

    vm.isSignedIn =  function(){
      if(AuthFactory.isSignedIn){
        return true;
      } else {
        return false;
      }
    }

    vm.signin =function(){
       if (vm.email && vm.password) {
         var user = {
           submitter: 'submitter',
           username:vm.email,
           password:vm.password,
           activity: 'auth'
         };
         $scope.loading=true;

        $http.post('http://api.nationsauction.com/auth/User/Authenticate', user).then(function(response){
          if(response.status === 200){
            $window.sessionStorage.token = response.data.token;
             $window.localStorage.setItem('userId', JSON.parse(response.data).message);
            AuthFactory.isSignedIn = true;
            }
            $scope.loading=false;

            console.log(response, response.status)
          }).catch(function(error){
            console.log(error)
          })

       }
    }


    vm.signout = function(){
      AuthFactory.isSignedIn = false;
      delete $window.sessionStorage.token
      delete $window.localStorage.userId
      // $location.path('/#')
    }




  }
