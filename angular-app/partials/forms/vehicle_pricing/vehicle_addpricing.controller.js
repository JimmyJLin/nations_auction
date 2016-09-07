angular.module('naBaseApp').controller('VehicleAddPricingController', VehicleAddPricingController);

function VehicleAddPricingController($scope, vehiclePricingProvider){
  var vm = this;

  vm.addVehiclePricing = function(){
    var vin = "1GNEK13Z34J221437"

    var vehiclePricingData = JSON.stringify({
      'submitter': "submitter",
      'vin': "1GNEK13Z34J221437",
      'vehicleCost': vm.vehicleCost,
      'vehiclePurchaseDate': vm.purchaseDate,
      'reservePrice': vm.reservePrice,
      'startingBid': vm.startingBid,
      'activity': 'add'

    })
    console.log("Vehicle Pricing Data", vehiclePricingData)
    vehiclePricingProvider.addVehiclePricing(vehiclePricingData)
  }



}
