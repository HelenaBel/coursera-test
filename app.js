(function () {
  'use strict';
  angular.module('LunchCheck', [])
     .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
      $scope.input = "";
      $scope.message = "";
      $scope.Check = function () {
      var count = 0;
      var inputStrArr = $scope.input.split(',');
      count = inputStrArr.length;
      if($scope.input == "")
        {$scope.message = "Please enter data first!";}
      else
        if(count <= 3)
          {$scope.message = "Enjoy!";}
        else
          {$scope.message = "Too much!";}
      };
 }

 })();
