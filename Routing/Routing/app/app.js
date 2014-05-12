var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'SimpleController',
            templateUrl: '/app/view1/view1.html'
        }).when('/view2', {
            controller: 'ComplexController',
            templateUrl: '/app/view2/view2.html'
        })
    .otherwise({ redirectTo: '/' });
});

var controllers = {};
controllers.SimpleController = function ($scope, simpleFactory) {
    $scope.customers = simpleFactory.getCustomers();

    $scope.addNew = function () {
        $scope.customers.push({ name: $scope.newName, city: $scope.newCity });
        $scope.newName = "";
        $scope.newCity = "";
    };
};
controllers.ComplexController = function ($scope, complexFactory) {
    $scope.customers = complexFactory.getCustomers();
};

demoApp.controller(controllers);
demoApp.factory('simpleFactory', function () {
    var factory = {};
    var customers = [
        { name: 'Rumesh Eranga', city: 'Ekala' },
        { name: 'Nimesha Nishadi', city: 'Weligampitiya' },
        { name: 'Chamara Madusanka', city: 'Seeduwa' },
        { name: 'Isuru Anuradha', city: 'Gampaha' }
    ];
    factory.getCustomers = function () {
        return customers;
    };

    return factory;
});

demoApp.factory('complexFactory', function () {
    var factory = {};
    var customers = [
        { name: 'Kasun', city: 'Katunayake' },
        { name: 'Nuwan', city: 'Moratuwa' },
        { name: 'Dasun', city: 'Homagama' },
        { name: 'Hasun', city: 'Bambalapitiya' }
    ];
    factory.getCustomers = function () {
        return customers;
    };

    return factory;
});