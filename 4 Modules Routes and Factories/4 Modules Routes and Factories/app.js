var demoApp = angular.module('demoApp', []);

//demoApp.controller('SimpleController', SimpleController);

//function SimpleController($scope) {
//    $scope.customers = [
//        { name: 'Rumesh Eranga', city: 'Ekala' },
//        { name: 'Nimesha Nishadi', city: 'Weligampitiya' },
//        { name: 'Chamara Madusanka', city: 'Seeduwa' },
//        { name: 'Isuru Anuradha', city: 'Gampaha' }
//    ];
//}


var controllers = {};
controllers.SimpleController = function($scope) {
    $scope.customers = [
        { name: 'Rumesh Eranga', city: 'Ekala' },
        { name: 'Nimesha Nishadi', city: 'Weligampitiya' },
        { name: 'Chamara Madusanka', city: 'Seeduwa' },
        { name: 'Isuru Anuradha', city: 'Gampaha' }
    ];
};
controllers.ComplexController = function ($scope) {
    $scope.customers = [
        { name: 'Kasun', city: 'Katunayake' },
        { name: 'Nuwan', city: 'Moratuwa' },
        { name: 'Dasun', city: 'Homagama' },
        { name: 'Hasun', city: 'Bambalapitiya' }
    ];
};

demoApp.controller(controllers);