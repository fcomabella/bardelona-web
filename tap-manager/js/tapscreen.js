'use strict';
(function () {
    angular.module('tapScreenApp', []).controller('tapScreenController', ['$scope', '$http', function ($scope, $http) {
        $scope.taps = [];

        $http.get('data/taps.json').then(function (response) {
            $scope.taps = response.data;
        });
    }]);
})();