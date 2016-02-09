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
            .when('/empresas', {
                templateUrl: '/templates/pages/empresas/index.html',
                controller: 'EmpresasIndexController',
                controllerAs: 'indexController'
            })
            .when('/', {
                templateUrl: '/templates/pages/funcionarios/index.html'
            })
            .otherwise({redirectTo: '/'});
        
    });