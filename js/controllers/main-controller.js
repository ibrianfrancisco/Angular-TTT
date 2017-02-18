(function() {
'use strict';

angular.module('app')
.controller('MainController', MainController);

MainController.$inject = ['$scope', '$state']

function MainController($scope, $state) {

  $scope.player1 = null;
  $scope.player2 = null;


  $scope.goToBoard = function(playerOne, playerTwo) {
    $scope.player1 = playerOne;
    $scope.player2 = playerTwo;
    $state.go('board');
  }



}

})();
