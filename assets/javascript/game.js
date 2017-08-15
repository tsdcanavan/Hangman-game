// variables
var wordList = ['NOTEBOOK','GLASSES','PENCIL','HAND','PLANT','PAPER','WATCH'];
var hangmanWord = "";
var inputKey;
var missGuess = [];
var goodGuess = [];
var numGuess = 10;
var wins = 0;
var loss = 0;
var screenLookup = [];
var inputFound;

// select the word
function randomWord() {
//	console.log("here");
	hangmanWord= wordList[Math.floor(Math.random() * wordList.length)];
	console.log(hangmanWord);
}

// initialize for selecting characters
function initScreen() {
	screenLookup = [];
	numGuess = 10;
	for (var i = 0; i < hangmanWord.length; i++) {
		screenLookup[i] = "_"
	}
	missGuess = [];
	console.log(screenLookup);
	console.log(missGuess);
}

// check the character selected
function charWord() {
	inputFound = false;
	for (var i = 0; i < hangmanWord.length; i++) {
	  if (inputKey	=== hangmanWord.charAt(i)) {
	  	screenLookup[i] = inputKey;
	  	inputFound = true;
	  }
	}
	if (inputFound === false) {
	  if (missGuess.indexOf(inputKey) === -1) {
	    missGuess.push(inputKey);
	    numGuess--;
	  }
	 }
	bldScreen();
	console.log(inputKey);
	console.log(screenLookup);
	console.log(missGuess);
	console.log(numGuess);
}

// check for win or lose
function winLoseCheck() {
	if (numGuess === 0) {
		loss++
		randomWord();
		initScreen();
		bldScreen();
	}
	else if (screenLookup.includes("_")) {
		win ;
	} else {
		wins++;
		randomWord();
		initScreen();	
		bldScreen();
	}
}

function bldScreen() {
//load display characters	
    lettersDsply = "";
	for (var i = 0; i < hangmanWord.length; i++) {
	  lettersDsply = lettersDsply + " " + screenLookup[i];	
	}

// load left side of screen
	  var leftDiv = $("<div>");
      leftDiv.html("Click anywhere to start the game<br>" +
      				"Enter '!' to give up and exit the game<br>" +
      				"Guesses Remaining: " + numGuess + "<br>" +
      				"Games won: " + wins +"<br>" );
      $("#left-side").html(leftDiv);

// load right-side of screen
	var rightDiv = $("<div>");
    rightDiv.html("Missed tries  " + missGuess + "<br><br>" +
    				lettersDsply + "<br>" );
      $("#right-side").html(rightDiv);

// load top line
	  var topDiv = $("<h3>");
      topDiv.html("Enter your guess" )
      $("#top-center").html(topDiv);


}


// start of the program
randomWord();
initScreen();
bldScreen();

// get key
(document).onkeyup = function(event) {
	inputKey = String.fromCharCode(event.keyCode).toUpperCase();
	charWord();
	winLoseCheck();
}


