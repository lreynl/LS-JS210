//interleave
function interleave(arr1, arr2) {
  var i;
  var len = arr1.length
  var interleaved = [];
  
  for (i = 0; i < len; i++) {
    interleaved.push(arr1[i]);
    interleaved.push(arr2[i]);
  }
  
  return interleaved;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]