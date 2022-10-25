const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word.split("").map(char => new Letter(char));
  }

  guessLetter(guessLetter) {
    let foundletter = false;
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i].guess(guessLetter)) { //guessLetter === this.letters[i].char
        foundletter = true;
      }
    }
    return foundletter;

  }

  // guessLetter(char) {
  //   // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
  //   let foundLetter = false;
  //   this.letters.forEach(letter => {
  //     if (letter.guess(char)) {
  //       foundLetter = true;
  //     }
  //     return foundLetter;
  //   });

  //   // return whether we found a letter
  //   return foundLetter;
  // }

  guessedCorrectly() {

    return this.letters.every(letter => letter.visible);

    // let alldone = this.letters.length
    // for (let i = 0; i < this.letters.length; i++) {

    //   if (this.letters[i].visible === true) {
    //     alldone--;
    //   }
    // }
    // if (alldone === 0) {
    //   console.log(alldone);
    //   return true;
    // } else {
    //   return false;
    // }
  }

  //

  getSolution() {
    return this.letters
      // iterate over each letter and return the solution for each 
      // to form an array of solved letters
      .map(letter => letter.getSolution())
      .join(""); // create a string from the array of solved letters
  }

  // setting `toString()` as a method lets us concatenate it like we would a string!
  toString() {
    return this.letters.join(" "); // see Letter.prototype.toString in Letter.js
  }
}

module.exports = Word;
