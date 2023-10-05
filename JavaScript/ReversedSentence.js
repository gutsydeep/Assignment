function ReversedSentence(str) {
    const words = str.split(' ');
  
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day";
  const reversed = ReversedSentence(inputSentence);
  console.log(reversed);
  