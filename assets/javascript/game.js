// Creates an array that lists out all of the guessable options (the alphabet). This will also be what the computer is limited to when making a guess.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "k", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and number of guesses.
var wins = 0;
var losses = 0;
var guesses = 0;

// Stores the user guess.
var userGuessStore = [];

// FROM RPS#3  -- This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if (userGuess === computerGuess){
    wins++;
    guesses++;
    userGuessStore = userGuess;
    } else {
      losses++;
    }

    // Alert the userGuess and computerGuess
    // alert("User guess: " + userGuess);
    // alert("Computer guess: " + computerGuess);


  var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses: " + guesses + "</p>";

    document.querySelector("#game2").innerHTML = html;

  };

