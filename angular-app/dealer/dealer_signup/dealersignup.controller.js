angular.module('naBaseApp').controller('DealerSignupController', DealerSignupController)

  // 1. declare our controller.
  function DealerSignupController ($scope, dealerProvider) {
    var vm = this;
    vm.test = "test";
    vm.EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    vm.PASS_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/;

    vm.register = function(){
      console.log('this is from the register function' ,vm)
        var user = JSON.stringify({
          submitter: "submitter",
          username: vm.email,
          password: vm.password,
          activity: 'add'
        })
        console.log('this is the user object' ,user)

        if(!vm.email || !vm.password) {
           vm.error = 'Please enter email address and password'
        } else {
          if(vm.password !== vm.passwordRepeat){
            vm.error = 'Please make sure the passwords match'
          } else {

            dealerProvider.registerDealer(user)

          }
        }

  }

  }
