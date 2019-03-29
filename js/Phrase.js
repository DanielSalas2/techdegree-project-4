class Phrase {
  constructor(phrase)
  {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
      let arr = [...this.phrase];
      arr.forEach(letter => {
        let li = $(`<li>${letter}</li>`);
        if(letter !== ' ') {
        li.addClass(`hide letter ${letter}`);
        $('#phrase ul').append(li);
      } else {
        let li = $(`<li>${letter}</li>`);
        li.addClass('hide space');
        $('#phrase ul').append(li);
      }
      return letter;
    });
}

checkLetter(letter)
{
  return this.phrase.includes(letter);
}
showMatchedLetter(letter)
{
  const letterElements = document.getElementsByClassName(letter);
  for (let i = 0; i < letterElements.length; i++)
  {
    // loop over all found letterElements and add class show to its existing classes
    letterElements[i].classList.add('show');
  }

}

}
