function isPalindrome(str) {
  //return compareArray(str.split(''), str.split('').reverse());
  return str === str.split('').reverse().join('');
}

//palindrome2
function isRealPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^A-Z0-9]/gi, '');
  return isPalindrome(str);
}

console.log("*palindrome2");
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false