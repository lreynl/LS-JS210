function shortLongShort(str1, str2) {
  var concat = '';
  
  if (str1.length < str2.length) {
    concat = str1 + str2 + str1;
  } else {
    concat = str2 + str1 + str2;
  }
  
  return concat;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"