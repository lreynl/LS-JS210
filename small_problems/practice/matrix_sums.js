//matrix sums
function matrixSums(arr) {
  var sums = [];
  arr.forEach(function(elem) {
    sums.push(elem.reduce(function(total, current) { return total + current; }, 0));
  });
  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]