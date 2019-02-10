var inquire = require("inquirer");
var $ = require("jquery");
var Word = require("./word.js");


// list of films
var films = ['All About Eve','On the Waterfront','The Bridge on the River Kwai','Lawrence of Arabia','The Sound of Music','Patton',
                            'The Godfather','Amadeus','Platoon','The Silence of the Lambs','Unforgiven','Braveheart','American Beauty','The Return of the King',
                            'No Country for Old Men','Slumdog Millionaire','Birdman','Moonlight','Gone with the Wind'];


function start() {
    // get random film, and set to NEW WORD
    var film = films[Math.floor(Math.random() * films.length)].toUpperCase();
    var word = new Word(film);
    wordGuess(word, film);
    chancesLeft = 10;
};


function wordGuess(letterChoice, letterCorrect) {

    var letters = [];
    var correctGuesses = [];

    
    console.log("\n"+letterChoice.displayWord());
    

    // prompt to guess letter
    inquire.prompt([
        {
            name: "guessLetter",
            message: "Pick a letter.",
            validate: function validateLetter(name) {
                if (!name.match(/[a-z]/i)) {
                    console.log('\nPick a letter');
                }
                else if (name.length > 1){
                    console.log('\nYou can only pick ONE letter. Try again.');
                }
                else{
                    return true;
                }
            }
        }
    ]).then(function (answer) {
        var letterGuessed = answer.guessLetter.toUpperCase();
        

        // runs function to check letter that is guessed
        letterChoice.tryWord(letterGuessed);

        // for loop that updates letters that are displays, whether correct or not
        for(var i=0;i<letterChoice.letter.length; i++) {
            letters.push(letterChoice.letter[i].letter);
            correctGuesses.push(letterChoice.letter[i].correct);
        }

        // if letter chosen is correct, display result. Else, show incorrect message
        if(letters.indexOf(letterGuessed) > -1){
            console.log("\nCORRECT!!!");
            console.log(chancesLeft + ' guesses left');
        }
        else{
            console.log("\nIncorrect!");
            chancesLeft--;
            console.log(chancesLeft + ' guesses left');
        }

        // run wordguess function if game is still running
        if (correctGuesses.indexOf(false) > -1 && chancesLeft > 0) {
            wordGuess(letterChoice, letterCorrect);
        }
        else {
            if (chancesLeft === 0) {
                console.log("Sorry, you lose!");
                console.log("\n ANSWER: " + letterCorrect);
                
            }
            else {
                console.log("You won!");
                console.log("\n ANSWER: " + letterCorrect);
            }

            inquire.prompt([
                {
                    name: "tryAgain",
                    message: "Try again? type Y or N."
                }
            ]).then(function (answer) {
                if (answer.tryAgain.toUpperCase() === "Y") {
                    start();
                }

                });
        }

    });
};



start();