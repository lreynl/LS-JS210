//sequence count
function sequence(len, startStep) {
  var i;
  var seq = [];
  var elem = startStep;
  
  for (i = 1; i <= len; i += 1, elem += startStep) {
    seq.push(elem);
  }
  
  return seq;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []