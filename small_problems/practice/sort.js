//sort
function sortDescending(arr) {
  var copy = Array.from(arr);
  return copy.sort(function(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });
}

console.log(sortDescending([23, 4, 16, 42, 8, 15]));