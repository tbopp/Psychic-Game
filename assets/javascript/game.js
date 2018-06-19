// Creates an array that lists out all of the guessable options (the alphabet). This will also be what the computer is limited to when making a guess.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins and losses.
var wins = 0;
var losses = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Function to verify letter
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