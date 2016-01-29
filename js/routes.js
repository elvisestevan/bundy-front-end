/*global angular */
angular.module('bundy')
    .config(function ($routeProvider) {
        "use strict";
        $routeProvider.when('/usuarios', {
            templateUrl: '/templates/pages/usuarios/index.html'
        })
            .when('/funcionarios', {
                templateUrl: '/templates/pages/funcionarios/index.html'
            })
            .when('/', {
                templateUrl: '/templates/pages/funcionarios/index.html'
            })
            .otherwise({redirectTo: '/'});
        
    });