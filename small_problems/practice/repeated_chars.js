function countChars(str) {
  var count = {};
  str.split('').forEach(function(char) {
    char = char.toLowerCase();
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  });
  return count;
}

function repeatedCharacters(str) {
  var charCount = countChars(str);
  var repeated = {};
  for (var chr in charCount) {
    if (charCount[chr] > 1) repeated[chr] = charCount[chr];
  }
  return repeated;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }