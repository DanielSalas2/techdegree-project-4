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

}
