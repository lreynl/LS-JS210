//multiply lists
function multiplyList(arr1, arr2) {
  var i;
  var len = arr1.length;
  var multiplied = [];
  
  for (i = 0; i < len; i++) {
    multiplied[i] = arr1[i] * arr2[i];
  }
  
  return multiplied;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]