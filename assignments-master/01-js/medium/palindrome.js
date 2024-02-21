/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

    // Convert the string to lower case to make the comparison case-insensitive
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  //  Reverse the string and compare it with the original
    // let him=str.split('').reverse().join('');
    // return str ===him ;
   
      // // Convert the string to lower case to make the comparison case-insensitive
      // str = str.toLowerCase();
  
      // // Initialize two pointers at the start and end of the string
      let start = 0;
      let end = str.length - 1;
  
      // // Loop until the two pointers meet in the middle
      while (start < end) {
          // If the characters at the start and end of the string are not the same, return false
          if (str[start] !== str[end]) {
              return false;
          }
  
          // Move the start pointer forward and the end pointer backward
          start++;
          end--;
      }
     
      // // If the loop completes without returning false, the string is a palindrome
       return true;
  }
  




module.exports = isPalindrome;
