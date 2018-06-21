// Creates an array that lists out all of the guessable options (the alphabet). This will also be what the computer is limited to when making a guess.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "k", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, number of guesses, and turns.
var wins = 0;
var losses = 0;
var guesses = 0;
var turns = 10;

// Stores the user guess.
var GuessesSoFar = [];

// Resets game stats
var resetGame = function(){
  turns = 10;
  GuessesSoFar = [];
}

// This function is run whenever the user presses a key and begins the game.
document.onkeypress = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Records user guesses
var recordGuess = function(){
  GuessesSoFar.push(userGuess);
}

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   // Alert the userGuess and computerGuess
   alert("You guessed: '" + userGuess + "' and the Computer guessed: '" + computerGuess + "'");


  // This logic determines the outcome of the game (win/loss) as well as increments (or decrement) the appropriate game stat.
  if (userGuess === computerGuess){
    wins++;
    alert("WOW YOU WON!! You must be Psychic, or just really lucky.")
    resetGame();
    userGuess = " ";
    computerGuess = " ";
    } else {
      turns--;
      recordGuess();
    }

    // This logic will alert the user of remaining turns and, ultimately, reset the game after all turns have expired.
    if (turns === 3){
      alert("Hmm... Maybe you aren't as good as you think you are. Only " + turns + " turns left. Choose wisely!");
    } else if (turns === 0){
      alert("No turns left. YOU LOSE!! Click 'OK' and try again.");
      losses++;
      resetGame();
      userGuess = " ";
      computerGuess = " ";
    }

// This variable contains the statistical information to be displayed on the webpage by updating a <div> elemement.
  var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>Guesses so far: " + GuessesSoFar + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>turns left: " + turns + "</p>";

    document.querySelector("#gameStats").innerHTML = html;

  };

