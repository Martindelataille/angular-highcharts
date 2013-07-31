'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('chartCtrl', ['$scope', function($scope) {

        var results = [];
        var i = 10;
        while(i--){
              results.push(Math.floor((Math.random()*100)+1))
        }

        $scope.change = function(type){
                  $scope.data = {
                        type : type,
                        results :  results,
                        xAxis : ["start", "second", 3 , 4],
                        subtitle : "Example"
            }
        }

  	$scope.data = {
                    type : "spline",
                    results :  results,
                    xAxis : ["start", "second", 3 , 4],
                    subtitle : "Example"
        }

  }]);
