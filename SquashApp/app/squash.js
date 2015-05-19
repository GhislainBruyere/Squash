var observableModule = require("data/observable");
var observableArray = require("data/observable-array");
var viewModule = require("ui/core/view");

var items = new observableArray.ObservableArray([]);
var page;
var player1Name;
var player2Name;

var view = require("ui/core/view");
var player1Score = 0;
var player2Score = 0;
var player1Set = 0;
var player2Set = 0;

exports.onPageLoaded = function(args) {
    page = args.object;
	
	page.bindingContext = { 
		items: items,
		player2Name: "Françoise Gerard",
		player1Name: "Ghislain Bruyère",
		player1Score : player1Score,
		player1Set : player1Set,
		player2Score : player2Score,
		player2Set : player2Set
	};
};

function pageNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = page.navigationContext;
}

exports.tapPlayer1 = function tapPlayer1(args) {
	winPoint(1)
}

exports.tapPlayer2 = function tapPlayer2(args) {
	winPoint(2)
}

function winPoint(player){
	
	if (player == 1)
		player1Score++;
	else
		player2Score++;
	
	if ((player1Score >= 11) && ((player1Score - player2Score) >= 2))
	{
		player1Score = 0;
		player2Score = 0;
		player1Set ++;
	}
		
	if ((player2Score >= 11) && ((player2Score - player1Score) >= 2))
	{
		player1Score = 0;
		player2Score = 0;
		player2Set ++;
	}
	
	var txt = "Score : " + player1Score + " - " + player2Score + "\n";
	items.unshift({ item: txt });
	
	bindingControls();
}

function bindingControls(){
		page.bindingContext = { 
		items: items,
		player2Name: "Françoise Gerard",
		player1Name: "Ghislain Bruyère",
		player1Score : player1Score,
		currentScoreSet : player1Set + " - " + player2Set,
		player2Score : player2Score,
	};
}