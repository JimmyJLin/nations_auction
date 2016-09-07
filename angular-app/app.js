var naBaseApp = angular.module("naBaseApp", [ "ngRoute", "checklist-model" ])

naBaseApp.config(function ($httpProvider, $routeProvider, $locationProvider) {
   $httpProvider.interceptors.push('AuthInterceptor')

    $routeProvider

    /* Landing Page */
    .when( "/",{
			redirectTo: "/index"
		})
    .when("/index", {
			controller: "PublicController",
			templateUrl: "/angular-app/main/index.html"
		})


  /* Dealer */
  .when("/dealer/dealersignup",{
    controller: "DealerSignupController",
    templateUrl: "/angular-app/dealer/dealer_signup/dealerSignup.html",
    controllerAs: 'vm'

  })
  .when("/dealer/dealersignin",{
    controller: "DealerSigninController",
    templateUrl: "/angular-app/dealer/dealer_signin/dealerSignin.html",
    controllerAs: 'vm'
  })
  .when("/dealer/resetpassword",{
    controller: "ResetPasswordController",
    templateUrl: "/angular-app/partials/reset_password/reset_password.html",
    controllerAs: 'vm'
  })

  /* Vehicle */
  .when('/vehicles', {
    controller: "VehiclesAllController",
    templateUrl: "/angular-app/vehicle/vehicle_all/vehicles_all.html",
    controllerAs: 'vm'
  })
  .when('/vehicles/:vehicleID', {
    controller: "VehicleDetailsController",
    templateUrl: "/angular-app/vehicle/vehicle_details/vehicle_details.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/new', {
    controller: "VehiclesAddController",
    templateUrl: "/angular-app/vehicle/vehicle_add/addVehicle.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/pricing/new', {
    controller: "VehicleAddPricingController",
    templateUrl: "/angular-app/partials/forms/vehicle_pricing/vehicle_pricing.html",
    controllerAs: 'vm'
  })

  /* Vehicle Condition Report */
  .when('/vehicle/condition/new', {
    controller: "AddConditionController",
    templateUrl: "/angular-app/vehicle/vehicle_condition/addcondition.html",
    controllerAs: 'vm'
  })
  .when('/vehicles/condition/:conditionID', {
    controller: "VehiclesInventoryController",
    templateUrl: "/angular-app/partials/vehicle/condition_report/condition_report_details.html",
    controllerAs: 'vm'
  })
  .when('/vehicle/damage/new', {
    controller: "VehiclesInventoryController",
    templateUrl: "/angular-app/partials/vehicle/tabs-partials/itemAddDamages.html",
    controllerAs: 'vm'
  })

  /* Add Vehicle by Vin */
  .when('/vehicle/byvin/new', {
    controller: "VehicleAddbyVinController",
    templateUrl: "/angular-app/vehicle/vehicle_add_by_vin/vehicle_add_by_vin.html",
    controllerAs: 'vm'
  })

  /* Marketplace */
  .when('/marketplace', {
    controller: "VehiclesAllController",
    templateUrl: "/angular-app/marketplace/marketplace.html",
    activetab: 'marketplace'
  })

  /* Inventory */
  .when('/inventory/vehicles', {
    controller: "VehiclesInventoryController",
    templateUrl: "/angular-app/vehicle/vehicle_inventory/vehicles_inventory.html",
    controllerAs: 'vm',
    activetab: 'inventory'
  })

  /* Watchlist */
  .when('/watchlist', {
    controller: "PublicController",
    templateUrl: "/angular-app/watchlist/watchlist.html",
    controllerAs: 'vm',
    activetab: 'watchlist'
  })

	// Redirect to 404
  .otherwise({
		redirectTo:
		"/404_page"
	});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
});


naBaseApp.run(function($rootScope, $location, $window, AuthFactory){
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if(  nextRoute.access !== undefined && nextRoute.access.restricted && !window.sessionStorage.token && !AuthFactory.isSignedIn ) {
      event.preventDefault();
      $location.path('/public/index')
    }
  });
})
