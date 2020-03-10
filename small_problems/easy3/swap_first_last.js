//swap first & last letter
function swap(str) {
  str = str.split(' ');
  str = str.map(function(elem) {
    if (elem.length == 1) return elem;
    return elem[elem.length - 1] + 
           elem.slice(1, elem.length - 1) + 
           elem[0];
  });
  
  return str.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"