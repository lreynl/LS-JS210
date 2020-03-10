//double char 1
function repeater(str) {
  str = str.split('').map (function(chr) {
    return chr + chr;
  });
  return str.join('');
}
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""