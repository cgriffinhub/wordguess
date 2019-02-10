var Letter = require("./Letter.js");

// word constructor
var Word = function(word){
    
    //array to capture all letters in word, including spaces
    this.letter = [];
    
    
    for(var i=0; i < word.length; i++){
        if(word.charAt(i) === " "){
            this.letter.push(" ");
        }
        else{
            this.letter.push(new Letter(word.charAt(i)));
        };
    };


    //for loop to display each letter of word
    this.displayWord = function(){
        var showFilm = "";

        for(var i=0;i<this.letter.length; i++) {
            if(this.letter[i].letter === null || this.letter[i].letter === undefined){
                showFilm += "  ";
            }
            else{
                showFilm += this.letter[i].displayLetter();
            }
        }
        
        // return the word
        return showFilm;
    }

    // function runs when letter is guessed. calls letter.js to check whether letter is corect or not
    this.tryWord = function(letterGuess){


        
        for(var i=0;i<this.letter.length; i++) {
            
            if(this.letter[i].letter !== undefined){
                this.letter[i].tryLetter(letterGuess);
            }
        }
    };
};

module.exports = Word;