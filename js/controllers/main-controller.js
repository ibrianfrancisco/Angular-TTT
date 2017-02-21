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

  $scope.makeChoice = function(row, column) {
    if ($scope.board[row][column] === '') {
      var choice = ($scope.turnNumber === 0) ? 'X' : 'O';
      $scope.board[row][column] = choice;
      changeTurn();
      checkWin();
    }

  }

  function changeTurn() {
    $scope.turnNumber === 0 ? $scope.turnNumber = 1 : $scope.turnNumber = 0
  }

  function checkWin() {
    for(var i = 0; i < 3; i++) {
      // checks if horizontal rows are equal to each other and not equal to an empty string.
      if($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][2] == $scope.board[i][0] && $scope.board[i][0] !== "" && $scope.board[i][0] == "X"){
        console.log("X win horizontal");
        p1Wins();
      }
      else if ($scope.board[i][0] == $scope.board[i][1] && $scope.board[i][2] == $scope.board[i][0] && $scope.board[i][0] !== "" && $scope.board[i][0] == "O"){
        console.log("O win horizontal");
        p2Wins();
      }
      // checks if vertical columns are equal to each other and not equal to an empty string.
      else if ($scope.board[0][i] == $scope.board[1][i] && $scope.board[2][i] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
        console.log("X win vertical");
        p1Wins();
      }
      else if ($scope.board[0][i] == $scope.board[1][i] && $scope.board[2][i] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
        console.log("O win vertical");
        p2Wins();
      // checks diagonal. only true when i = 0
      }
      else if ($scope.board[0][i] == $scope.board[1][i+1] && $scope.board[2][i +2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
        console.log("X win diagonal right");
        p1Wins();
      }
      else if ($scope.board[0][i] == $scope.board[1][i+1] && $scope.board[2][i +2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
        console.log("O win diagonal right");
        p2Wins();
      }
      //checks left diagonal. only true when i = 2
      else if ($scope.board[0][i] == $scope.board[1][i-1] && $scope.board[2][i-2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "X") {
        console.log("X win diagonal left");
        p1Wins();
      }
      else if ($scope.board[0][i] == $scope.board[1][i-1] && $scope.board[2][i-2] == $scope.board[0][i] && $scope.board[0][i] !== "" && $scope.board[0][i] == "O") {
        console.log("O win diagonal left");
        p2Wins();
      }
      // if turnNumber reaches 9 there's been no winner, tie condition is enforced.
      else if ($scope.turnNumber == 9) {
        catsGame();
      }
    }
  }


  function p1Wins() {
    $state.go('gameover');
    $scope.winner = $scope.player1 + " wins!"
  }

  function p2Wins() {
    $state.go('gameover');
    $scope.winner = $scope.player2 + " wins!"
  }

  function catsGame() {
    $state.go('gameover');
    $scope.winner = "Cats Game :["
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
}

})();
