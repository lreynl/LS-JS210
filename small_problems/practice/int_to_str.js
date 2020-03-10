//int to string
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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"