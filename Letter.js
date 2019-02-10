// letter constructor
var Letter = function(letter){
    this.letter = letter;

    //correct is set to FALSE until letter is guesssed correctly
    this.correct = false;
    
    // if letter chosen is correct, show the letter
    this.displayLetter = function(){
        if(this.correct){
            return this.letter + " ";
        }
        else{
            return "_ ";
        };
    };

    // set correct to true is correct letter is chosen
    this.tryLetter = function(letterChosen){
        if(letterChosen === this.letter){
            this.correct = true;
        }
        
    };
};
module.exports = Letter;