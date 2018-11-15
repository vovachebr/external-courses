function Hangman(word){
    this.word = "";
    this.errorsLeft = 6;
    this.state = "";
    this.wrongSymbols = [];

    this.startAgain = function(word){
        this.word = word;
        this.state = "_".repeat(word.length);
        this.errorsLeft = 6;
        return this;
    }
    this.startAgain(word);

    this.guess = function(symbol){
        if(this.word.includes(symbol)){
            let position = 0;
            while (true) {
                var foundPosition = this.word.indexOf(symbol, position);
                if (foundPosition == -1) break;
              
                this.state = this.state.substr(0, foundPosition) + symbol + this.state.substr(foundPosition + 1);
                position = foundPosition + 1; // продолжить поиск со следующей
              }
            if(!this.state.includes("_")){
                console.log(this.word + "| You won!");
            }
        }
        else{
            this.wrongSymbols.push(symbol);
            this.errorsLeft--;
            console.log(`wrong letter, errors left ${this.errorsLeft} | ${this.wrongSymbols}`);
            if(this.errorsLeft == 0){
                this.word = "";
                console.log("Game Over");
            }
        }
        return this;
    }
    this.getGuessedString = function(){
        console.log(this.state);
        return this;
    }

    this.getErrorsLeft = function(){
        console.log(this.errorsLeft);
        return this;
    }

    this.getStatus = function(){
        console.log(this.state + "| errors left " + this.errorsLeft);
        return this;
    }

    this.getWrongSymbols = function(){
        console.log(this.wrongSymbols);
        return this;
    }
}

var hangman = new Hangman('webpurple');

hangman.guess('w'); // "w________"
hangman.guess('e'); // "we______e"
hangman.guess('a'); // "wrong letter, errors left 5 | a"
hangman.guess('p'); // "we_p__p_e"
hangman.guess('k'); // "wrong letter, errors left 4 | a,k"
hangman.guess('b') // "webp___p_e"
  .guess('l') // "webp__ple"
  .getErrorsLeft() // 4
  .getWrongSymbols() // [a,k]
  .guess('u') // "webpu_ple"
  .guess('r'); // "webpurple | You won!"

hangman.getGuessedString();

module.exports = Hangman();
