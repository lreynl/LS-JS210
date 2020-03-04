//Trimming spaces
function trimSpaces(str) {
  var copy1 = '';
  var copy2 = '';
  var len = str.length;
  var i = 0;
  var j;
  while (str[i] === ' ') {
    i++;
  }
  
  for (; i < len; i++) {
    copy1 += str[i];
  }
  
  i = copy1.length - 1;
  
  while (copy1[i] === ' ') {
    i--;
  }
  
  for (j = 0; j <= i; j++) {
    copy2 += copy1[j];
  }
  
  return copy2;
}

console.log(trimSpaces('   abc    '));
console.log(trimSpaces('abc    '));
console.log(trimSpaces('   abc'));
console.log(trimSpaces('abcxyz'));
console.log(trimSpaces('   a b c d e f    '));
console.log(trimSpaces(''));