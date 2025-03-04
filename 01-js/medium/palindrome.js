/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  function cleanString(s) {
    return s.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  const cleanedStr = cleanString(str);
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

module.exports = isPalindrome;
