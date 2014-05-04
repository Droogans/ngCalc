'use strict';

/* Controllers */

angular.module('gdCalc.controllers', ['gdCalc.directives', 'gdCalc.services']).
controller('gdCalcCtrl', function ($scope, DefaultScreen) {
    $scope.screen = DefaultScreen.value;
    $scope.buttonRows = [
        ['C', '+', '-'],
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['0', '.', '=']
    ];
    $scope.problem = '';
    $scope.input = function (button) {
        if (button === 'C') {
            $scope.problem = DefaultScreen.value;
            button = '';
        }
        if (button === '=') {
            $scope.problem = $scope.$eval($scope.problem);
            button = '';
        }
        var lastEntered = $scope.problem[$scope.problem.length - 1] || '0';
        if ( /[0-9]/.test(lastEntered) || /[0-9]/.test(button) ) {
            $scope.problem += button;
        }
        $scope.screen = $scope.problem;
    };
});
