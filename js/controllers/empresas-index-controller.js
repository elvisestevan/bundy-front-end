/*global angular */
angular.module("bundy")
    .controller('EmpresasIndexController', function ($http) {
        'use strict';
        var controller = this;
        $http({method: 'GET', url: '/empresas'}).success(function (data) {
            controller.empresas = data;
        });
    });