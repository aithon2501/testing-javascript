function reverseString(wordString) {
  var wordArray = wordString.split('');
  var newWordArray = [];
  for (var i = 0; i < wordArray.length; i++) {
    newWordArray[i] = wordArray[wordArray.length - (i + 1)];
  }
  return newWordArray;
}

module.exports = reverseString;