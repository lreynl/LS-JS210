//Greatest common divisor
function gcd(a, b) {
  var c;
  while (a % b !== 0) {
    c = a % b;
    if (c === 0) return b;
    a = b;
    b = c;
  }
  return b;
}

console.log(gcd(62, 36));
console.log(gcd(15, 10));
console.log(gcd(12, 4));
console.log(gcd(36, 62));