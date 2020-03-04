//Converting Strings to Lower Case
function toLowerCase(str) {
  var i;
  var len = str.length;
  var lowercase = '';
  var char;
  
  for (i = 0; i < len; i++) {
    char = str.charCodeAt(i);
    
    if (char >= 65 && char <= 90) {
      lowercase += String.fromCharCode(char + 32);
    } else {
      lowercase += str[i];
    }
    
  }
  return lowercase;
}

console.log(toLowerCase("ABCDEFG"));
console.log(toLowerCase(""));
console.log(toLowerCase("ABCDEFG123"));
console.log(toLowerCase("aBcDeFg987^%$ABCDEFG"));
console.log(toLowerCase("98765439876543"));