angular.module('naBaseApp').controller('VehiclesInventoryController', VehiclesInventoryController);

function VehiclesInventoryController($scope, vehicleInventoryProvider){

  var vm = this;
  vm.title= "Inventory";

  // Truck Option Checkbox
  $scope.dashLightOptions = [
    'Bed Liner',
    'Custom Bed',
    'Custom Bumper',
    'Dual Rear Wheels',
    'Dump Bed',
    'Front Tow Hooks',
    'Grille Guard',
    'Hard Tonneau Cover',
    'Hydraulic Lift',
    'Lifted'
  ];
  $scope.dashLightOption = {
    options: ['dashLightOption']
  };

  // Damage Report Starts
  $scope.damageReports = []
  $scope.exteriorDamageReports = []
  $scope.interiorDamageReports = []

  vm.addExteriorDamage = function(){
    var exteriorDamage = {
      'intExt': 'ext',
      'location': vm.exteriorDamageLocation,
      'damageType': vm.exteriorDamageType,
      'severity': vm.exteriorDamageSeverity,
      'estimatedRepairCost': vm.estimatedExteriorRepairCost,
      'description': vm.exteriorDamageComment
    }
    $scope.damageReports.push(exteriorDamage)
    $scope.exteriorDamageReports.push(exteriorDamage)

    console.log("exteior Damage", exteriorDamage)

    $scope.exteriorDamageReset()
  }

  vm.addInteriorDamage = function(){
    var interiorDamage = {
      'intExt': 'ext',
      'location': vm.interiorDamageLocation,
      'damageType': vm.interiorDamageType,
      'severity': vm.interiorDamageSeverity,
      'estimatedRepairCost': vm.estimatedInteriorRepairCost,
      'description': vm.interiorDamageComment
    }
    $scope.damageReports.push(interiorDamage)
    $scope.interiorDamageReports.push(interiorDamage)

    console.log("interior Damage", interiorDamage)

    $scope.interiorDamageReset()
  }

  $scope.exteriorDamageReset = function(){
    vm.exteriorDamageLocation = null;
    vm.exteriorDamageType = null;
    vm.exteriorDamageSeverity = null;
    vm.estimatedExteriorRepairCost = null;
    vm.exteriorDamageComment = null;

  }

  $scope.interiorDamageReset = function(){
    vm.interiorDamageLocation = null;
    vm.interiorDamageType = null;
    vm.interiorDamageSeverity = null;
    vm.estimatedInteriorRepairCost = null;
    vm.interiorDamageComment = null;
  }
  // Damage Report Ends

  // Add Condition Report Starts
  vm.addCond = function(){
    var conditionData = JSON.stringify({
      'submitter': "submitter",
      'owner': '617a69c3-bd34-445c-a762-1bbcf228f7bb',
      'vin': vm.vin,
      'grade': vm.grade,
      'recondition': vm.recondition,
      'detail': vm.detail,
      'frameDamage': vm.frameDamage,
      'previouslyRepainted': vm.previouslyRepainted,
      'dashLightOptions': vm.dashLightOptions,
      'damage': vm.damage,
      'vehicleDrives': vm.vehicleDrive,
      'engine': vm.engine,
      'transmission': vm.transmission,
      'exhaust': vm.exhaust,
      'ac': vm.ac,
      'battery': vm.battery,
      'oilChanged': vm.oilChanged,
      'fuelLevel': vm.fuelLevel,
      'tireMatch': vm.tireMatch,
      'tireWeatherChecked': vm.weatherChecked,
      'tireLeftFront': vm.leftFront,
      'tireRightFront': vm.rightFront,
      'tireLeftRear': vm.leftRear,
      'tireRightRear': vm.rightRear,
      'tireSpare': vm.spare,
      'tireJack': vm.jack,
      'keysMaster': vm.master,
      'keysRemote': vm.remote,
      'keysValet': vm.valet,
      'keysCombo': vm.combo,
      'keysKeylessGo': vm.keylessGo,
      'windshield': vm.windshield,
      'ownersManual': vm.ownersManual,
      'odor': vm.odor,
      'floorMats': vm.floorMats,
      'activity': 'add'
    })


    var crGUID;
    vehicleInventoryProvider.addConditionData( conditionData, function(err,condD){
      var crGUID = condD.message;

      var damageData = JSON.stringify({
        'submitter': "submitter",
        'crGuid': crGUID,
        'damages': $scope.damageReports,
        'activity': "cradd"
      })

      vehicleInventoryProvider.addDamageData(damageData)

    })

  }

// Add Condition Report Ends


function get_vehicles(){
  $scope.loading=true;

  $scope.vehicles =   vehicleInventoryProvider.getVehicleByOwnerID( function(err, vehicles){
        $scope.finished_loading = true;
        if (err) {
            $scope.page_load_error = err.message;
        } else {
          // console.log("DEBUG => data --> " + vehicles);
          $scope.vehicles = vehicles;
          $scope.loading=false;


        }
      });
    };

    get_vehicles();



  // Edit Vehicle Starts
  vm.editVehicle =  function(){

      $scope.loading=true;
      $scope.show=false;
      var owner = "617a69c3-bd34-445c-a762-1bbcf228f7bb"

        var editedVehicleData = JSON.stringify({
          'submitter': "submitter",
          'vin': vm.vin,
          'year':vm.year,
          'make':vm.make,
          'model':vm.model,
          'trim':vm.trim,
          'bodyStyle':vm.bodyStyle,
          'bodyType':vm.bodyType,
          'vehicleStyle':vm.vehicleStyle,
          'vehicleType':vm.vehicleType,
          'itemNumber':vm.itemNo,
          'mileage':vm.mileage,
          'location':vm.location, // need to pass in location guid 32 digits + 4 dashes similar to owner
          'inventoryStatus':vm.inventoryStatus,
          'dateAdded':vm.dateAdded,
          'description': vm.description,
          'exteriorColor': vm.exteriorColor,
          'interiorColor': vm.interiorColor,
          'searchColor': vm.searchColor,
          'seatCovering':vm.seatCovering,
          'doorCount':vm.doorCount,
          'engine':{
            'cylinder': vm.cylinder,
            'size': vm.size,
            'configuration': vm.configuration,
          },
          'transmission':vm.transmission,
          'drivetrain':vm.drivetrain,
          'fuelType':vm.fuelType,
          'brakes':vm.brakes,
          'titleStatus':vm.titleStatus,
          'titleState':vm.titleState,
          'fullWarranty':vm.fullWarranty,
          'drivetrainWarranty': vm.drivetrainWarranty,
          'additionalWarranty': vm.additionalWarranty,
          'certifiedPreOwned':vm.certifiedPreOwned,
          'guaranteedFinancing': vm.guaranteedFinancing,
          'interiorOptions' : vm.interiorOptions,
          'exteriorOptions' : vm.exteriorOptions,
          'premiumOptions': vm.premiumOptions,
          'truckOptions': vm.truckOptions,
          'customOptions': vm.customOptions,
          'owner': owner,
          'activity': 'update'
        })

        // console.log('this is the new vehicle', editedVehicleData)
        // vehicleInventoryProvider.editVehicle(editedVehicleData);

    }
  // Edit Vehicle Ends

  // Add Vehicle Pricing Start
  vm.addVehiclePricing = function(vin){
    // var vin = "1GNEK13Z34J221437"

    var vehiclePricingData = JSON.stringify({
      'submitter': "submitter",
      'vin': vin,
      'vehicleCost': vm.vehicleCost,
      'vehiclePurchaseDate': vm.purchaseDate,
      'reservePrice': vm.reservePrice,
      'startingBid': vm.startingBid,
      'activity': 'add'

    })
    console.log("Vehicle Pricing Data Hello", vehiclePricingData)
    var status = vehicleInventoryProvider.addVehiclePricing(vehiclePricingData);
      if(!status) {
        vm.error_message_submit = "Vehicle Pricing not added"
      }
  }
  // Add Vehicle Pricing Ends

  // Add Damage Start
  $scope.damageReports = []
  $scope.exteriorDamageReports = []
  $scope.interiorDamageReports = []

  vm.addExteriorDamage = function(){
    var exteriorDamage = {
      'intExt': 'ext',
      'location': vm.exteriorDamageLocation,
      'damageType': vm.exteriorDamageType,
      'severity': vm.exteriorDamageSeverity,
      'estimatedRepairCost': vm.estimatedExteriorRepairCost,
      'description': vm.exteriorDamageComment
    }
    $scope.damageReports.push(exteriorDamage)
    $scope.exteriorDamageReports.push(exteriorDamage)

    // console.log("exteior Damage", exteriorDamage)

    $scope.exteriorDamageReset()
  }

  vm.addInteriorDamage = function(){
    var interiorDamage = {
      'intExt': 'ext',
      'location': vm.interiorDamageLocation,
      'damageType': vm.interiorDamageType,
      'severity': vm.interiorDamageSeverity,
      'estimatedRepairCost': vm.estimatedInteriorRepairCost,
      'description': vm.interiorDamageComment
    }
    $scope.damageReports.push(interiorDamage)
    $scope.interiorDamageReports.push(interiorDamage)

    // console.log("interior Damage", interiorDamage)

    $scope.interiorDamageReset()
  }

  $scope.exteriorDamageReset = function(){
    vm.exteriorDamageLocation = null;
    vm.exteriorDamageType = null;
    vm.exteriorDamageSeverity = null;
    vm.estimatedExteriorRepairCost = null;
    vm.exteriorDamageComment = null;

  }

  $scope.interiorDamageReset = function(){
    vm.interiorDamageLocation = null;
    vm.interiorDamageType = null;
    vm.interiorDamageSeverity = null;
    vm.estimatedInteriorRepairCost = null;
    vm.interiorDamageComment = null;
  }


  vm.addVehicleDamage = function(vin){
    // console.log("VIN is", vin)
    var damageData = angular.toJson({
      'submitter': "submitter",
      "crGuid": "911f3413-0e9d-402d-b651-380c8c4d2e9e",
      'damages': $scope.damageReports,
      'activity': "cradd"
    })
    // console.log("Vehicle damageData Posted! Damages are: ", damageData)
    var status = vehicleInventoryProvider.addDamageData(damageData)
      if (!status) {
        vm.error_message_submit = "Vehicle Damage Report NOT posted"
      }


  }
  // Add Damage Ends


  $scope.conditionReports =   vehicleInventoryProvider.getAllConditionReports( function(err, conditionReports){
    $scope.finished_loading = true;
    if (err) {
        $scope.page_load_error = err.message;
    } else {
          // console.log("DEBUG => data --> " + conditionReports);
        $scope.conditionReports = conditionReports;
        $scope.loading=false;

    }
  });

}
