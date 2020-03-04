//daily double
function crunch(str) {
  var i = 0;
  var result = '';
  
  while (str[i] !== undefined) {
    if (str[i] === str[i + 1]) {
      i++;
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
