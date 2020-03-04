//Repeating strings
function repeat(str, times) {
  if (typeof times !== 'number' || times < 0) return '';
  var i;
  var strings = '';
  for (i = 0; i < times; i++) {
    strings += str;
  }
  return strings;
}

console.log(repeat("abc", 1));
console.log(repeat("abc", 0));
console.log(repeat("abc", -1));
console.log(repeat("abc", 5));
console.log(repeat("abc", 'a'));
console.log(repeat("abc", ' '));
console.log(repeat("abc", ''));