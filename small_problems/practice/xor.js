//XOR
function isXor(a, b) {
  a = !!a;
  b = !!b;
  console.log((a && !b) || (!a && b));
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false

isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false