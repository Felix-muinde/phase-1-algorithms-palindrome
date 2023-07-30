
function isPalindrome(word) {
  // Convert the word to lowercase to make the comparison case-insensitive
  const lowercaseWord = word.toLowerCase();

  // Reverse the word
  const reversedWord = lowercaseWord.split('').reverse().join('');

  // Compare the original word with the reversed word
  return lowercaseWord === reversedWord;
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase.
  2. Reverse the word.
  3. Compare the original word with the reversed word.
  4. If they match, return true (it's a palindrome); otherwise, return false.

  Explanation:
  The function takes a word as input and first converts it to lowercase to ensure a case-insensitive comparison.
  Then, it reverses the word using the split-reverse-join technique and stores it in the 'reversedWord' variable.
  Finally, it compares the original word with the reversed word, and if they match, it returns true, indicating that the word is a palindrome; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
