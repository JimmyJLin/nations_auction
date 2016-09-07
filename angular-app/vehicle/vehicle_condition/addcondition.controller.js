angular.module('naBaseApp').controller('AddConditionController', AddConditionController);

function AddConditionController($scope, $location, addConditionProvider){

  var vm = this;
  vm.VIN_REGEXP = /^[a-zA-Z0-9](\w{9}(\w{7})?)?$/;

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
    // console.log(conditionData)
    // console.log(damageData)
    // TEST VIN - 1GNEK13Z34J221437

    var crGUID;
    // var crGuid = addConditionProvider.addConditionData(conditionData)
    addConditionProvider.addConditionData( conditionData, function(err,condD){
      var crGUID = condD.message;

      var damageData = JSON.stringify({
        'submitter': "submitter",
        'crGuid': crGUID,
        'damages': $scope.damageReports,
        'activity': "cradd"
      })

      addConditionProvider.addDamageData(damageData)

    })

  }

}
