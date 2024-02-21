/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // Convert to lower case and remove all non-alphanumeric characters
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Sort the characters in the strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return (str1 === str2);
  


}

module.exports = isAnagram;
