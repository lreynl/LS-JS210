//middle character
function centerOf(str) {
  var len = str.length;
  
  if (len % 2 == 0) {
    return str.slice(len / 2 - 1, len / 2 + 1);
  } else {
    var half = Math.floor(len / 2);
    return str.slice(half, half + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"