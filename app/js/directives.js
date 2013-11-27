'use strict';

/* Directives */

angular.module('gdCalc.directives', []).
directive('gdCalc', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/gd-calc.html'
    };
}).
directive('buttonPanel', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/button-panel.html'
    };
});
