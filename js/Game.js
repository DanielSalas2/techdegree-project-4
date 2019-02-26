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


}
