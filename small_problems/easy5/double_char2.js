//double char 2
function doubleConsonants(str) {
  str = str.split('').map (function(chr) {
    if (chr.match(/[bcdfghjklmnpqstvwxyz]/gi)) {
      return chr.repeat(2);
    } else {
      return chr;
    }
  });
  return str.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""