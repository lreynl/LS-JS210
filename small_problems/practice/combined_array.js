//combined array
function combinedArray(even, odd) {
  var i = 0;
  var len = even.length;
  var interleaved = [];
  while (i < len) {
    interleaved.push(even[i]);
    interleaved.push(odd[i]);
    i++;
  }
  return interleaved;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]