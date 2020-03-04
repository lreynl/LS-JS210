//Substring (1)
function substr(str, start, length) {
  if (typeof start == 'undefined' || typeof length == 'undefined') return '';
  var slice = '';
  var i;
  var len = str.length;
  if (start < 0) start = len + start;
  for (i = 0; i < length && (start + i < len); i++) {
    slice += str[start + i];
  }
  return slice;
}

var string = 'hello world';
console.log("SUBSTR1:");
console.log(substr(string, 2, 5));      // "llo w"
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""