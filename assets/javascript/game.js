
	// GLOBALS variable list
	var wordList = ['NOTEBOOK','GLASSES','PENCIL','HAND','PLANT','PAPER','WATCH'];
	var alphaInput = "";					//user guess
	var alphaMissList =	 [];				//list of previous guesses
	var alphaFound = false;					//boolean indicator if the user guessed an existing letter
	var hangmanWord = "";					//the word selected from the wordList
	var lettersList = [];					//the underscore list replaced with the guessed letters 
	var lettersDsply;						//the display of lettersList with spaces between
	var winCount = 0;						//keep count of the number of wins
	var remainingGuesses=0;					//the number of guesses before losing
	// load left-side information
	  
	  remainingGuesses = 10 - alphaMissList.length;	
	  var leftDiv = $("<div>");
      leftDiv.html("Click anywhere to start the game<br>" +
      				"Enter '!' to give up and exit the game<br>" +
      				"Guesses Remaining: " + remainingGuesses + "<br>" +
      				"Games won: " + winCount +"<br>" );
      				      				
      $("#left-side").append(leftDiv);

// load right-side information
	  var rightDiv = $("<div>");
      rightDiv.html("<br><br>" +
      				"<br><br>" );
      				
      $("#right-side").append(rightDiv);

	// load top input line
	  var topDiv = $("<div>");
      topDiv.html("Enter your guess: " +
      				'<input id="keyInput" size="3" type="text">');
      $("#top-center").html(topDiv);

	// select a word out of the word list array
	function selectWord() {
		// make the random number generator use variables so that you can just change a number here
		// and get a different range. I could also be updated to allow you to pass the lower and upper
		// limits.
    	var	lower_bound = 0,
    		upper_bound = 6;
    		
			var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
    			hangmanWord = wordList[random_number];
    			console.log(hangmanWord);
	}

	//initialize the screen to diplay "_" for each of the letters in the word.
	function initialDisplay() {
		lettersDsply = "";
	  //load _ to each element of the lettersList array	
	  for (var i = 0; i < hangmanWord.length; i++) {
		lettersList[i] = "_";
		lettersDsply = lettersDsply	+ " " + lettersList[i]	
	  }
// load right-side information
	  var rightDiv = $("<div>");
      rightDiv.html("Missed tries  " + alphaMissList + "<br><br>" +
      				lettersDsply + "<br>" );
	}

	// update to display the letters correctly guessed
	function updateDisplay() {
	  // start by indicating that the letter hasn't been found	
	  alphaFound	= false;
	  // check to see if the input is "!" - exit if it is, the user gave up and lost
	  if (alphaInput === "!") {
	  	// load the word to the array to display it
	  	lettersList	= hangmanWord + "_";
	  }
	  else {
	  	// a letter was selected, check if it exists
	  
	  for (var i = 0; i < hangmanWord.length; i++) {
	    // if it is in the hangmanWord then update the letterList for display
	  	if (alphaInput.toUpperCase() === hangmanWord.charAt(i)) {
	  		lettersList[i] = alphaInput.toUpperCase();
	  		// mark it as found
	  		alphaFound = true;
	  	}
	  }
	}

	  // if the letter isn't in hangmanWord, load the missed letter list
	  if (alphaFound === false && alphaMissList.indexOf(alphaInput.toUpperCase()) === -1) {
	  	alphaMissList.push(alphaInput.toUpperCase());
	  	remainingGuesses = 10 - alphaMissList.length;	  	
	  }
	  // load right-side information
	  var rightDiv = $("<div>");
      rightDiv.html("Missed tries  " + alphaMissList +"<br><br>" +
      							"The word is " + lettersDsply	+ "<br>" );      				
      $("#right-side").html(rightDiv);

	}


	// load the values to display the item
	function loadDisplay() {
	  lettersDsply	= "";
	  for (var i = 0; i < lettersList.length; i++) {
	  	  lettersDsply = lettersDsply	+ " " + lettersList[i];
	  	}
	  }

$(document).ready(function() {
	$("#game-space").on("click",function() {

		// initialize game values
	alphaMissList =	 [];				//list of previous guesses
	alphaFound = false;					//boolean indicator if the user guessed an existing letter
	hangmanWord = "";						//the word selected from the wordList
	lettersList = [];					//the underscore list replaced with the guessed letters 
	lettersDsply;						//the display of lettersList with spaces between
	alphaInput	="";
		  // select a word from the word list
		  selectWord();

		  // prep the screen for displaying the _ characters
	  	initialDisplay();
	  	console.log(lettersList);

	// continue the game as long as there are stil letters to guess, you didn't give up ("!")
	// and you tried less than 10 guesses
	console.log(lettersList.indexOf("_"));
	console.log(alphaMissList.length);
	console.log(alphaInput);

		// get input key
		$(document).keyup( function(event) {
    	alphaInput = event.key;
      	alphaInput = alphaInput.toUpperCase();  
		console.log("#keyInput " + alphaInput);

	while (lettersList.indexOf("_") !== -1 && alphaMissList.length < 10 && alphaInput !== "!") {
		    	
    //	alphaInput = prompt("Enter '!' to give up and exit the game" +
  	// 						"\nMissed tries  " + alphaMissList + 
  	// 						"\nThe word is " + lettersDsply + 
  	// 						"\n Enter your guess - one letter");

  	//   alphaInput = alphaInput.charAt(0);
  	    	

		updateDisplay();
	  	loadDisplay(); 	
	  }

	});


	  if (lettersList.indexOf("_") === -1) {
	  	winCount = ++winCount;
	//  	alert("Winner!!!!\nYou have won " + winCount +
	//  		 " games.\nYou guessed the word!!!\n The word is " + lettersDsply);

	  }
	  else if (alphaMissList.length>9) {
	  //	alert("You have lost the game. You had " + alphaMissList.length + " wrong guesses");
	  } 
	  else {
	  //	alert("You gave up!!!\nThe word is " + lettersDsply);	
	  }
	  
	  // load left-side information
	  var leftDiv = $("<div>");
      leftDiv.html("Click anywhere to start the game<br>" +
      				"Enter '!' to give up and exit the game<br>" +
      				"Guesses Remaining: " + remainingGuesses + "<br>" +
      				"Games won: " + winCount +"<br>" );
      				
      $("#left-side").html(leftDiv);
	  
	  // load right-side information
	  var rightDiv = $("<div>");
      rightDiv.html("Missed tries  " + alphaMissList +"<br><br>" +
      							"The word is " + hangmanWord + "<br><br>" );
      $("#right-side").html(rightDiv);

	});
});