function frequencyCounter(word) {
  const charCount = {}

  for (const char of word)
    charCount[char] = (charCount[char] || 0) + 1
  
  return charCount
}

// Do not edit this line;
module.exports = frequencyCounter;