function integerToString(int) {
  if (int === 0) return '0';
  var lookup = { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
                 6: '6', 7: '7', 8: '8', 9: '9' };
  var str = '';
  var digit;
  
  while (int > 0) {
    int /= 10;
    digit = +(((int - Math.floor(int)) * 10).toFixed(1));
    str = lookup[digit] + str;
    int = Math.trunc(int);
  }
  return str;
}

function signedIntegerToString(int) {
  if (int === 0) { 
    return '0';
  } else if (int > 0) {
    return '+' + integerToString(int);
  } else {
    return '-' + integerToString(Math.abs(int));
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"