    var wordList = ['EQUESTRIANISM','THROBS','DEMOGRAPHERS','FEARED','LIGHTWEIGHTS','EUPHEMISTIC','PLEDGING','PAINKILLER','COMMONALITY','OVERMANNING','DROPLET','SAUNA','TECHNIQUE','MISCONCEPTION','ORANGUTAN','TELECOMS','FIXERS','INCONSIDERATE','GEEK','MOLTEN','FORSWEAR','ROUNDLY','DOLPHINS','HEADSCARVES','OXIDATION']
	var alphaInput;
	var alphaMiss =	 [];
	var alphaSuccess = false;
	var hangman;
	var hangmanarr = [];
	var hitOrMiss = false;
	var lettersList = [];
	var lettersDsply;
	var dashNumber = 0;
	var winLose = false;

	function checkHit(guess) {
	  for (var i = 0; i < hangman.length; i++) {
	  	if (hangman.charAt(i) === guess) {
	  	  return true;
	  	}
	  }
	  return false;
	}		

	function displayHits(guess) {
	  for (var i = 0; i < hangman.length; i++) {
	   if (hangman.charAt(i) === guess) {
	   	hangmanarr[i] = guess; 
	   }	
	   else {
	   	hangmanarr[i] = "_";
	   }
	  }
	}

	function displayMisses() {
	  if (alphaMiss.indexOf(guess) === -1) {
	  	alphaMiss.push(guess);
	  }
	  else {
	  	alert("That letter " + guess + " has already been guessed")
	  }
	}

	function displayGuess() {
	  guess = prompt("Enter a letter -");
	  if (guess.match(/[a-z]/i)) {
	  
	  }
	};
	
	function selectWord() {
		//Example, including customisable intervals [lower_bound, upper_bound)
		var limit = 25,
    		amount = 3,
    		lower_bound = 0,
    		upper_bound = 24,
    		unique_random_numbers = [];

			var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
    			hangman = wordList[random_number];
    			console.log(hangman);
	};

	function initialDisplay() {
	  for (var i = 0; i < hangman.length; i++) {
		lettersList[i] = "_";
	  }
	  lettersDsply	= "";
	  for (var i = 0; i < lettersList.length; i++) {
  	    lettersDsply = lettersDsply	+ " " + lettersList[i];
  	  }
	}

	function updateDisplay() {
	  alphaSuccess	= false;
	  if (alphaInput === "!") {
	  	lettersList	= hangman;
	  	winLose = false;
	  }
	  else {
	  for (var i = 0; i < hangman.length; i++) {
	
	  	if (alphaInput.toUpperCase() === hangman.charAt(i)) {
	  		lettersList[i] = alphaInput.toUpperCase();
	  		alphaSuccess = true;
	  	}
	  }
	  if (lettersList.indexOf("_") === -1) {
	  	winLose = true;
	  }
	}
	console.log(lettersList);
	  if (alphaSuccess === false && alphaMiss.indexOf(alphaInput) === -1) {
	  	alphaMiss.push(alphaInput);
	  }
	}

	function loadDisplay() {
	  lettersDsply	= "";
	  for (var i = 0; i < lettersList.length; i++) {
	  	  lettersDsply = lettersDsply	+ " " + lettersList[i];
	  	}
	  }

	  selectWord();
	  initialDisplay();

	while (lettersList.indexOf("_") !== -1) {
	  	alphaInput = prompt("Enter '!' to give up and exit the game" +
	  						"\nMissed tries  " + alphaMiss + 
	  						"\nThe word is " + lettersDsply + 
	  						"\n Enter your guess - one letter");
	    alphaInput = alphaInput.charAt(0);
		updateDisplay();
	  	loadDisplay();
	}

	  if (winLose) {
	  	alert("Winner!!!!\nYou guessed the word!!!\n The word is " + lettersDsply);
	  }
	  else {
	  	alert("You gave up!!!\nThe word is " + lettersDsply);	
	  }

