//slice
function slice(arr, start, end) {
  var sliced = [];
  var i;
  for (i = 0; start < end; start++, i++) {
    sliced[i] = arr[start];
  }
  return sliced;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
