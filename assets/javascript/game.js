// Creates an array that lists out all of the guessable options (the alphabet). This will also be what the computer is limited to when making a guess.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "k", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and number of guesses.
var wins = 0;
var losses = 0;
var guesses = 0;

// Determines which key was pressed.
var userGuess = event.key;

// Stores the user guess.
var userGuessStore = [];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Function to store user guess into an array
function allLetter(userGuess){
   var letters = /^[A-Za-z]+$/;
   if(userGuess.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("You must enter a letter! Please try again.");
     return false;
     }
    }

};

