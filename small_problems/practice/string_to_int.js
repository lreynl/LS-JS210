//string to integer
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

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570