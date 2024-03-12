const sentenceToSearch = "Mon violon tombe mais je sauve une note";

const findLongerWord = (sentence) => {
    const arrayOfWords = sentence.split(' ');
    let longerWord = arrayOfWords[0];
    arrayOfWords.map((word) => {
        longerWord = word.length > longerWord.length ? word: longerWord;
    });
    console.log('The longer word of the phrase "'+sentence + '"','is:',longerWord);
}

findLongerWord(sentenceToSearch);