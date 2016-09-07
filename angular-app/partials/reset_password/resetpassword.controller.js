(function () {

    // 1. declare our controller.
    function ResetPasswordController ($scope, resetPasswordProvider) {
      var vm = this;
      vm.test = "test";

      vm.resetPass = function(){
        console.log('this is from the register function' ,vm)
          var user = JSON.stringify({
            submitter: "submitter",
            username: vm.email,
            password: vm.password,
            activity: 'update'
          })
          console.log('this is the user object' ,user)

          if(!vm.email || !vm.password) {
             vm.error = 'Please enter email address and password'
          } else {
            if(vm.password !== vm.passwordRepeat){
              vm.error = 'Please make sure the passwords match'
            } else {

              resetPasswordProvider.resetPassword(user)

            }
          }

    }

    }

    naBaseApp.controller("ResetPasswordController", ['$scope', 'resetPasswordProvider', ResetPasswordController]);

})();
