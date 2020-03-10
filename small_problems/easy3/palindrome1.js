function compareArray(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  var i;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}

function isPalindrome(str) {
  return compareArray(str.split(''), str.split('').reverse());
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true