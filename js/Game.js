class Game{

    constructor()
    {
      this.missed =  0;
      //directly put the phrases in the constructor
      this.phrases = [new Phrase("hello world"),
                      new Phrase("Wolf on wall street"),
                      new Phrase("Despite making"),
                      new Phrase("Karen took the kids"),
                      new Phrase("alright about to head out")];
      this.activePhrase = null;
    }

    getRandomPhrase()
    {
      //returns 5 of the random phrases
      return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }


    startGame()
    {
      let hid = document.getElementById('overlay');
      hid.style.display = "none";
      let phrs = this.getRandomPhrase();
      phrs.addPhraseToDisplay();
      this.activePhrase = phrs;
    }
    checkForWin()
    {
      let divy = document.getElementById("phrase");
      let list = divy.getElementsByTagName("li");
      for (let i = 0; i < list.length; i++)
      {
        // loop over all found letterElements and add class show to its existing classes
      return  list[i].classList.contains('show');
      }


    }
    removeLife()
    {

      let loss = document.getElementById("scoreboard");
      let loss2 = loss.getElementsByTagName("img")[this.missed];
      this.missed += 1;
      return loss2.src="images/lostHeart.png";

      /*This method removes a life from the scoreboard, by replacing one
of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
folder) and increments the `missed` property. If the player has five missed
guesses (i.e they're out of lives), then end the game by calling the `gameOver()`
method.*/
    }
    gameOver(gameWon)
    {
    /*This method displays the original start screen overlay, and
depending on the outcome of the game, updates the overlay `h1` element with a
friendly win or loss message, and replaces the overlay’s `start` CSS class with
either the `win` or `lose` CSS class.*/
    }
    handleInteraction()
    {
      // this method stores each of the method into one.
    }


}
