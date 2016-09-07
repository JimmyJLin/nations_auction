angular.module('naBaseApp').controller('VehiclesAddController', VehiclesAddController);

function VehiclesAddController($scope, vehicleProvider){
  var vm = this;

  // Truck Option Checkbox
  $scope.truckOptions = [
    'Bed Liner',
    'Custom Bed',
    'Custom Bumper',
    'Dual Rear Wheels',
    'Dump Bed',
    'Front Tow Hooks',
    'Grille Guard',
    'Hard Tonneau Cover',
    'Hydraulic Lift',
    'Lifted',
    'Nerf Bars',
    'Off-Road Package',
    'Oversize Off-Road Tires',
    'Pickup Shell Cover',
    'Running Boards',
    'Sliding Rear Window',
    'Snow Plow',
    'Stability Rack',
    'Stepside Bed',
    'Third Door',
    'Towing Package',
    'Trailer Brake',
    'Underbody Hoist',
    'Winch'
  ];
  $scope.truckOption = {
    options: ['truckOption']
  };

  // Premium Options Checkbox
  $scope.premiumOptions = [
    'Adjustable Pedals',
    'Air Suspension',
    'Auxiliary Audio Input',
    'Back-Up Camera',
    'BOSE Sound System',
    'Cooling Driver Seat',
    'Cooling Passenger Seat',
    'Custom Paint',
    'Driveaway Protection',
    'Driver Cooled Seats',
    'Dual Zone Climate Control',
    'DVD Player',
    'Electro-Chromatic Mirror',
    'Electronic Compass',
    'Electronic Stability Control',
    'External Temperature',
    'Hands-Free Bluetooth',
    'Heated Driver Seat',
    'Heated Passenger Seat',
    'Heated Steering Wheel',
    'HID Headlamps',
    'HomeLink Systems',
    'Leather Door Panels',
    'Leather Steering Wheel',
    'Microsoft Sync',
    'MP3 Input',
    'Navigation System',
    'OnStar',
    'Pass Through Rear Seat',
    'Power Folding Mirrors',
    'Power Liftgate',
    'Power Sliding Door',
    'Rear Audio Control',
    'Rear Heat/AC Controls',
    'Rear Heated Seat',
    'Rear Parking Sensors',
    'Remote Start',
    'lTire Monitoring',
    'Satellite Radio',
    'Side Airbags',
    'Steering Wheel Audio Controls',
    'System',
    'Turn Signal Mirrors',
    'Wireless Headphones',
    'Xenon Lights',
    'XM Radio'
  ]
  $scope.premiumOption = {
    options: ['premiumOption']
  };

  // Interior Options Checkbox
  $scope.interiorOptions = [
    '3rd Row Seating',
    'Air Conditioning',
    'AM/FM Radio',
    'Cassette',
    'CD Charger',
    'CD Player',
    'Child Safety Locks',
    'Climate Control',
    'Cruise Control',
    'Driver Air Bag',
    'Driver Heated Seats',
    'Driver Front Air Bag',
    'Dual Power Seats',
    'Extra Keys',
    'F and R Side Air Bags',
    'Floor Mats',
    'Front Side Air Bag',
    'Integrated Phone',
    'Leather Seats',
    'Lumbar Support',
    'Memory Seats',
    'Power Door Locks',
    'Power Mirrors',
    'Power Seats',
    'Power Windows',
    'Premium Sound System',
    'Rear Bucket Seats',
    'Rear Heat Ducts',
    'Telescoping Wheel ',
    'Tilt Wheel',
    'Trip Computer',
    'Video System'
  ]
  $scope.interiorOption = {
    options: ['interiorOption']
  };

  // Interior Options Checkbox
  $scope.exteriorOptions = [
    'ABS (4-Wheel)',
    'Alloy Wheels',
    'Anti-Theft Alarm',
    'Automatic Headlights',
    'Flip-Up Roof',
    'Fog Lights',
    'Full Sized Spare',
    'Heated Mirrors',
    'Keyless Entry',
    'Luggage Rack',
    'Moon Roof',
    'Power Steering',
    'Premium Wheels',
    'Privacy Glass',
    'Rear Defrost',
    'Rear Spoiler',
    'Rear Wiper',
    'Remote Trunk Release',
    'Roof Rack',
    'Sliding Sun Roof',
    'Traction Control',
    'Two-Tone Paint'
  ]
  $scope.exteriorOption = {
    options: ['exteriorOption']
  };

  vm.save = function(){
    var owner = "617a69c3-bd34-445c-a762-1bbcf228f7bb"

      var addVehicleData = JSON.stringify({
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
        'activity': 'add'
      })

    var status = vehicleProvider.addVehicleAndSave(addVehicleData);
        if (!status) {
          vm.error_message_submit = "Vehicle already exists"
        }

  // vehicleProvider.addVehicle(addVehicleData);

  }


  vm.saveAndContinue = function(){
    var owner = "617a69c3-bd34-445c-a762-1bbcf228f7bb"

      var addVehicleData = JSON.stringify({
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
        'activity': 'add'
      })

    var status = vehicleProvider.addVehicleAndContinue(addVehicleData);
        if (!status) {
          vm.error_message_submit = "Vehicle already exists"
        } else {

        }

  // vehicleProvider.addVehicle(addVehicleData);

  }



}
