# Wordguess
<p>Word guess game using Node.js. Runs exclusively in the terminal. Correctly guesed letters appear, and any wrong guess reduces the number of guesses by 1. When no guesses remain, the game ends. Or, when all letters are guessed correclty, the game ends with a "YOU WIN" message.</p>
<p>The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.</p>
<p>letter.js Contains a constructor, Letter. This constructor displays an underlying character or an underscore, depending on whether or not the user has guessed the letter.</p>
<p>Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.</p>

<h3>How to Start</h3>
<p>Download the repo. In a terminal, cd into the directory of the repo and type the following command to start the game: <strong>node index.js</strong></p>
  
