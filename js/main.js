var guiClonedWarsApp = angular.module('guiClonedWarsApp', ['firebase']);

guiClonedWarsApp.controller('GuiClonedWarsController', function ($scope, $firebase){

$scope.remoteGameContainer = $firebase(new Firebase("https://guiclonedwars.firebaseio.com/databaseGameContainer"));

$scope.testString = "Angular ready and connected";

var audiox = new Audio('audio/saberswipex.wav');
var audioo = new Audio('audio/saberswipeo.wav');
var audiotie = new Audio('audio/saberclashtie.wav');


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

		$scope.cellList = new Object() ;
    	$scope.cellList["0"] = {cellLocation: "0", xostatus: "not yet played", someVar: "A"} ;
    	$scope.cellList["1"] = {cellLocation: "1", xostatus: "not yet played", someVar: "A"} ;
    	$scope.cellList["2"] = {cellLocation: "2", xostatus: "not yet played", someVar: "A"} ;
    	$scope.cellList["3"] = {cellLocation: "3", xostatus: "not yet played", someVar: "A"} ;
    	$scope.cellList["4"] = {cellLocation: "4", xostatus: "not yet played", someVar: "A"} ;
    	$scope.cellList["5"] = {cellLocation: "5", xostatus: "not yet played", someVar: "A"} ;
    	$scope.cellList["6"] = {cellLocation: "6", xostatus: "not yet played", someVar: "A"} ;
    	$scope.cellList["7"] = {cellLocation: "7", xostatus: "not yet played", someVar: "A"} ;
    	$scope.cellList["8"] = {cellLocation: "8", xostatus: "not yet played", someVar: "A"} ;

		// $scope.cellList =
		// {"not yet played", "not yet played", "not yet played", "not yet played", "not yet played", "not yet played", "not yet played", "not yet played", "not yet played"};

		$scope.moveCounter = 0;

		$scope.notificationInitial = "";

		$scope.gameContainer = {
			cellListArray: $scope.cellList,
			moveCount: $scope.moveCounter,
			notification: $scope.notificationInitial
		};

		$scope.remoteGameContainer.$bind($scope, "gameContainer") ;

		$scope.$watch('gameContainer', function() {
			console.log('gameContainer changed!') ;
		});

		// $scope.playAudioTagX = function(){
		// 	var audiox = document.getElementById("audiotagx");
		// 	audio.load();
		// 	audio.play();
		// };

// var audio = new Audio('../audio/saberclashtie.wav');


		  $scope.playerPicks = function(thisCell) {
		    $scope.gameContainer.moveCount = $scope.gameContainer.moveCount + 1;
		    console.log("Cell " + thisCell.cellLocation + "\'s status was \'" + thisCell.xostatus + "\'") ;
		    if (($scope.gameContainer.moveCount % 2) == 1) {
		      thisCell.xostatus = "Gates" ;
		    }
		    else {
		      thisCell.xostatus = "Jobs" ;
		    } 
		    console.log("Cell " + thisCell.cellLocation + "\'s status now is \'" + thisCell.xostatus + "\'") ;
		    $scope.checkForWinner();
		    // $scope.play_single_sound()
		  } ;

		// $scope.play_single_sound = function() {
		// 	if (document.getElementsbyClassName == "oclass"){
		// 			document.getElementById('audiotago').play();
		// 	}
		// 	else if (document.getElementsbyClassName == "oclass"){
		// 			document.getElementById('audiotago').play();
		// 	}
		// 	else {console.log("No audio to be played");
		// 	};
		// }

		$scope.checkForWinner = function() {
		  	if (
		  		(
		  			($scope.gameContainer.cellListArray["0"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["1"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["2"].xostatus == "Gates")
		  		)
		  		|| 
		  		(
		  			($scope.gameContainer.cellListArray["3"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["4"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["5"].xostatus == "Gates")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["6"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["7"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["8"].xostatus == "Gates")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["0"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["3"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["6"].xostatus == "Gates")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["1"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["4"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["7"].xostatus == "Gates")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["2"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["5"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["8"].xostatus == "Gates")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["0"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["4"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["8"].xostatus == "Gates")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["2"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["4"].xostatus == "Gates") && 
		  			($scope.gameContainer.cellListArray["6"].xostatus == "Gates")
		  		)
		  	){
		  		$scope.gameContainer.notification = "Grand Master GATES Wins!!!";
		  		audiox.play();
		  	}
		  	else if (
		  		(
		  			($scope.gameContainer.cellListArray["0"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["1"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["2"].xostatus == "Jobs")
		  		)
		  		|| 
		  		(
		  			($scope.gameContainer.cellListArray["3"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["4"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["5"].xostatus == "Jobs")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["6"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["7"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["8"].xostatus == "Jobs")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["0"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["3"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["6"].xostatus == "Jobs")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["1"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["4"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["7"].xostatus == "Jobs")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["2"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["5"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["8"].xostatus == "Jobs")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["0"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["4"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["8"].xostatus == "Jobs")
		  		)
		  		||
		  		(
		  			($scope.gameContainer.cellListArray["2"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["4"].xostatus == "Jobs") && 
		  			($scope.gameContainer.cellListArray["6"].xostatus == "Jobs")
		  		)
		  	){
		  		$scope.gameContainer.notification = "Lord Supreme Commander JOBS Wins!!!";
		  		audioo.play();
		  	}
		  	else if
		  		(
		  			($scope.gameContainer.moveCount == "9") &&
		  			($scope.gameContainer.notification !== "Lord Supreme Commander JOBS Wins!!!") &&
		  			($scope.gameContainer.notification !== "Grand Master GATES Wins!!!")
		  		){
		  			$scope.gameContainer.notification = "GATES \& JOBS Have Locked in a Tie!!!";
		  	}
		  	else {
		  		console.log("These Guys are in a fight to a Tie!");
		  		 audiotie.play();
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