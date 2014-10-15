var guiClonedWarsApp = angular.module('guiClonedWarsApp', ['firebase']);
	guiClonedWarsApp.controller('GuiClonedWarsController', function ($scope, $firebase){

		var guiClonedDatabase = new Firebase("https://guiclonedwars.firebaseio.com");

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

		$scope.allMoves = $firebase(guiClonedDatabase);

		$scope.addMoves = function() { 
		  //Add manually using standard JavaScript
		  guiClonedDatabase.push( {moveCounter:$scope.moveCounter} );
		  $scope.moveCounter;
		  };


		$scope.cellList = [
		{cellLocation: "0", xostatus: "not yet played"}, 
		{cellLocation: "1", xostatus: "not yet played"}, 
		{cellLocation: "2", xostatus: "not yet played"}, 
		{cellLocation: "3", xostatus: "not yet played"}, 
		{cellLocation: "4", xostatus: "not yet played"}, 
		{cellLocation: "5", xostatus: "not yet played"}, 
		{cellLocation: "6", xostatus: "not yet played"}, 
		{cellLocation: "7", xostatus: "not yet played"}, 
		{cellLocation: "8", xostatus: "not yet played"}
		  ]  ;

		  $scope.movecounter = 0 ;

		  $scope.playerPicks = function(thisCell) {
		    $scope.movecounter = $scope.movecounter + 1 ;
		    console.log("Cell " + thisCell.cellLocation + "\'s status was \'" + thisCell.xostatus + "\'") ;
		    if (($scope.movecounter % 2) == 1) {
		      thisCell.xostatus = "X" ;  
		    } else {
		      thisCell.xostatus = "O" ;
		    } 
		    console.log("Cell " + thisCell.cellLocation + "\'s status now is \'" + thisCell.xostatus + "\'") ;
		    $scope.checkForWinner()
		  } ;

		$scope.checkForWinner = function() {
		  	if (
		  		(
		  			($scope.cellList[0].xostatus == "X") && 
		  			($scope.cellList[1].xostatus == "X") && 
		  			($scope.cellList[2].xostatus == "X")
		  		)
		  		|| 
		  		(
		  			($scope.cellList[3].xostatus == "X") && 
		  			($scope.cellList[4].xostatus == "X") && 
		  			($scope.cellList[5].xostatus == "X")
		  		)
		  		||
		  		(
		  			($scope.cellList[6].xostatus == "X") && 
		  			($scope.cellList[7].xostatus == "X") && 
		  			($scope.cellList[8].xostatus == "X")
		  		)
		  		||
		  		(
		  			($scope.cellList[0].xostatus == "X") && 
		  			($scope.cellList[3].xostatus == "X") && 
		  			($scope.cellList[6].xostatus == "X")
		  		)
		  		||
		  		(
		  			($scope.cellList[1].xostatus == "X") && 
		  			($scope.cellList[4].xostatus == "X") && 
		  			($scope.cellList[7].xostatus == "X")
		  		)
		  		||
		  		(
		  			($scope.cellList[2].xostatus == "X") && 
		  			($scope.cellList[5].xostatus == "X") && 
		  			($scope.cellList[8].xostatus == "X")
		  		)
		  		||
		  		(
		  			($scope.cellList[0].xostatus == "X") && 
		  			($scope.cellList[4].xostatus == "X") && 
		  			($scope.cellList[8].xostatus == "X")
		  		)
		  	){
		  		console.log("X is the winner");
		  	}
		  	else if (
		  		(
		  			($scope.cellList[0].xostatus == "O") && 
		  			($scope.cellList[1].xostatus == "O") && 
		  			($scope.cellList[2].xostatus == "O")
		  		)
		  		|| 
		  		(
		  			($scope.cellList[3].xostatus == "O") && 
		  			($scope.cellList[4].xostatus == "O") && 
		  			($scope.cellList[5].xostatus == "O")
		  		)
		  		||
		  		(
		  			($scope.cellList[6].xostatus == "O") && 
		  			($scope.cellList[7].xostatus == "O") && 
		  			($scope.cellList[8].xostatus == "O")
		  		)
		  		||
		  		(
		  			($scope.cellList[0].xostatus == "O") && 
		  			($scope.cellList[3].xostatus == "O") && 
		  			($scope.cellList[6].xostatus == "O")
		  		)
		  		||
		  		(
		  			($scope.cellList[1].xostatus == "O") && 
		  			($scope.cellList[4].xostatus == "O") && 
		  			($scope.cellList[7].xostatus == "O")
		  		)
		  		||
		  		(
		  			($scope.cellList[2].xostatus == "O") && 
		  			($scope.cellList[5].xostatus == "O") && 
		  			($scope.cellList[8].xostatus == "O")
		  		)
		  		||
		  		(
		  			($scope.cellList[0].xostatus == "O") && 
		  			($scope.cellList[4].xostatus == "O") && 
		  			($scope.cellList[8].xostatus == "O")
		  		)
		  	){
		  		console.log("O is the winner");
		  	}
		  	else {
		  		console.log("These Guys are in a fight to a Tie!");
		    }
	    };

});

// function checkForWinnerFunction() {
//     document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

// function playSound(soundfile) {
//   document.getElementsbyClassName("xclass").innerHTML= "<embed src=\""
//     +soundfile+"\" hidden=\"true\" autostart=\"true\"
//     loop=\"false\" />";
// }