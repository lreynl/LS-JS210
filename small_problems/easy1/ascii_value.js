function asciiValue(str) {
  var i;
  var sum = 0;
  var len = str.length;
  for (i = 0; i < len; i++) {
    sum += str.charCodeAt(i);
  }
  
  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0