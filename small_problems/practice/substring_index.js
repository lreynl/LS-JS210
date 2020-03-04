//Index of substring
function indexOf(str1, str2) {
  var i;
  var j;
  var found;
  if (str1.length < str2.length) return -1;
  for (i = 0; i < str1.length - str2.length + 1; i++) {
    for (j = 0; j < str2.length; j++) {
      found = false;
      if (str2[j] != str1[i + j]) break;
      found = true;
    }
    if (found) return i;
  }
  return -1;
}

function lastIndexOf(str1, str2) {
  if (str1.length < str2.length) return -1;
  var i;
  var j;
  var found;
  if (str1.length < str2.length) return -1;
  for (i = str1.length - str2.length; i >= 0; i--) {
    for (j = 0; j < str2.length; j++) {
      found = false;
      if (str2[j] != str1[i + j]) break;
      found = true;
    }
    if (found) return i;
  }
  return -1;
}

console.log(indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABC"));
console.log(indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "LMNOP"));
console.log(indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "XYZ"));
console.log(lastIndexOf("ABCDEFGHIABCDEFGHIABCDEFGHI", "DEF"));
console.log(lastIndexOf("ABCDEFGHIABCDEFGHIABCDEFGHI", "GHI"));
console.log(lastIndexOf("ABCDEFGHIABCDEFGHIABCDEFGHI", "ABC"));