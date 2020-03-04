//Substring (2)
function substring(str, start, end) {
  var len = str.length;
  if (typeof start == 'undefined') return '';
  if (typeof end == 'undefined') {
    end = len;
  }
  if (isNaN(start) || start < 0) start = 0;
  if (isNaN(end) || end < 0) end = 0;
  if (start > len - 1) start = len - 1;
  if (end > len - 1) end = len;
  if (start > end) {
    var temp = end;
    end = start;
    start = temp;
  } else if (start === end) {
    return '';
  }
  var slice = '';
  var i;
  for (i = start; i < end; i++) {
    slice += str[i];
  }
  return slice;
}

string = 'hello world';

console.log("SUBSTR2:");
console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"