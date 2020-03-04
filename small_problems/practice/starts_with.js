//String startsWith
function startsWith(str, search) {
  if (search.length > str.length) return false;
  if (search === '') return true;
  var i;
  var len = search.length;
  for (i = 0; i < len; i++) {
    if (str[i] !== search[i]) return false;
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false