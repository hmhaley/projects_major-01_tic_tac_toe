var guiClonedWarsApp = angular.module('guiClonedWarsApp', []);
	guiClonedWarsApp.controller('GuiClonedWarsController', function ($scope, $http){

		// $scope.players = [
		// 	{
		// 		firstName: 'Player1FirstName',
		// 		lastName: 'Player1LastName',
		// 		ceoName: 'Steve Jobs',
		// 		ceoImage: "../images/jobs.jpg",
		// 		ceoSound: ,
		// 		starWarsName: 'Yoda',
		// 		starWarsImage: ,
		// 		starWarsSound: ,
		// 		move1: ,
		// 		move2: ,
		// 		move3: ,
		// 		move4: ,
		// 		move5: ,
		// 		winOrLose: ,
		// 	},
		// 			{
		// 		firstName: 'Player2FirstName',
		// 		lastName: 'Player2LastName',
		// 		ceoName: 'Bill Gates',
		// 		ceoImage: "../images/gates.jpg",
		// 		ceoSound: ,
		// 		starWarsName: 'Vader',
		// 		starWarsImage: ,
		// 		starWarsSound: ,
		// 		move1: ,
		// 		move2: ,
		// 		move3: ,
		// 		move4: ,
		// 		move5: ,
		// 		winOrLose: ,
		// 	}

		// ] ;

		  $scope.cellList = [
		  {xostatus: "0"}, 
		  {xostatus: "1"}, 
		  {xostatus: "2"}, 
		  {xostatus: "3"}, 
		  {xostatus: "4"}, 
		  {xostatus: "5"}, 
		  {xostatus: "6"}, 
		  {xostatus: "7"}, 
		  {xostatus: "8"}
		  ]  ;

		  $scope.movecounter = 0 ;

		  $scope.testJS = function() {
		    console.log('Correctly accessing JS function.') ;
		  } ;

		  $scope.playerPicks = function(thisCell) {
		    $scope.movecounter = $scope.movecounter + 1 ;
		    console.log("Cell was: " + thisCell.xostatus) ;
		    if (($scope.movecounter % 2) == 1) {
		      thisCell.xostatus = "X" ;  
		    } else {
		      thisCell.xostatus = "O" ;
		    } 
		    console.log("Cell is now: " + thisCell.xostatus) ;
		  } ;

});

// function playSound(soundfile) {
//   document.getElementsbyClassName("xclass").innerHTML= "<embed src=\""
//     +soundfile+"\" hidden=\"true\" autostart=\"true\"
//     loop=\"false\" />";
// }