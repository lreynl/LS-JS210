function stringToInteger(str) {
  var lookup = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
                 '5': 5, '6': 6, '7': 7, '8': 8, '9': 9 };
  var int = 0;
  var len = str.length;
  var i;
  for (i = 0; i < len; i++) {
    int += lookup[str[i]] * 10**(len - 1 - i);
  }
  return int;
}

function stringToSignedInteger(str) {
  var sign = 1;
  if (str[0] === '-') {
    sign = -1;
    str = str.slice(1);
  } else if (str[0] === '+') {
    str = str.slice(1);
  }
  
  return stringToInteger(str) * sign;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100