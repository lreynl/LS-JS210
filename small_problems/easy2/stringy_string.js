//stringy strings
function stringy(len) {
  var str = '';
  while (len > 0) {
    str += '1';
    --len;
    if (len === 0) break;
    str += '0';
    --len;
  }
  return str;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"