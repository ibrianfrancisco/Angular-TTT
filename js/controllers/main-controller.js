(function() {
'use strict';

angular.module('app')
.controller('MainController', MainController);

MainController.$inject = ['$scope', '$state']

function MainController($scope, $state) {

  $scope.turnNumber = 0;

  $scope.board = [['','','',],
                  ['','','',],
                  ['','','']];

  function changeTurn() {
    $scope.turnNumber === 0 ? $scope.turnNumber = 1 : $scope.turnNumber = 0
  }

  function checkWinner(player) {
    $state.go('gameover');
    $scope.winner = player + " wins!";
  }

  function catsGame() {
    $state.go('gameover');
    $scope.winner = "Cats Game :["
  }

  $scope.makeChoice = function(row, column) {
    if ($scope.board[row][column] === '') {
      var choice = ($scope.turnNumber === 0) ? 'X' : 'O';
      $scope.board[row][column] = choice;
      changeTurn();
      checkWin();
    }
  }

  $scope.goToBoard = function(playerOne, playerTwo) {
    $scope.player1 = playerOne;
    $scope.player2 = playerTwo;
    $state.go('board');
  }

  $scope.restartGame = function() {
    $state.go('board');
    $scope.board = [['','','',],
                    ['','','',],
                    ['','','']];
  }

  function checkWin() {
    for(var i = 0; i < 3; i++) {
      // checks if horizontal rows are equal to each other and not equal to an empty string.
      if($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][2] == $scope.board[i][0] && $scope.board[i][0] !== "" && $scope.board[i][0] == "X"){
        console.log("X win horizontal");
        checkWinner($scope.player1);
      }
      else if ($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][2] == $scope.board[i][0] && $scope.board[i][0] !== "" && $scope.board[i][0] == "O"){
        console.log("O win horizontal");
        checkWinner($scope.player2);
      }
      // checks if vertical columns are equal to each other and not equal to an empty string.
      else if ($scope.board[0][i] == $scope.board[1][i] && $scope.board[2][i] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
        console.log("X win vertical");
        checkWinner($scope.player1);
      }
      else if ($scope.board[0][i] == $scope.board[1][i] && $scope.board[2][i] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
        console.log("O win vertical");
        checkWinner($scope.player2);
      // checks diagonal. only true when i = 0
      }
      else if ($scope.board[0][i] == $scope.board[1][i+1] && $scope.board[2][i +2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
        console.log("X win diagonal right");
        checkWinner($scope.player1);
      }
      else if ($scope.board[0][i] == $scope.board[1][i+1] && $scope.board[2][i +2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
        console.log("O win diagonal right");
        checkWinner($scope.player2);
      }
      //checks left diagonal. only true when i = 2
      else if ($scope.board[0][i] == $scope.board[1][i-1] && $scope.board[2][i-2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
        console.log("X win diagonal left");
        checkWinner($scope.player1);
      }
      else if ($scope.board[0][i] == $scope.board[1][i-1] && $scope.board[2][i-2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
        console.log("O win diagonal left");
        checkWinner($scope.player2);
      }
      else if (($scope.board[0][0] !== '') && ($scope.board[0][1] !== '') && ($scope.board[0][2] !== '') &&
               ($scope.board[1][0] !== '') && ($scope.board[1][1] !== '') && ($scope.board[1][2] !== '') &&
               ($scope.board[2][0] !== '') && ($scope.board[2][1] !== '') && ($scope.board[2][2] !== '')) {
        catsGame();
      }
    }
  }
}

})();
