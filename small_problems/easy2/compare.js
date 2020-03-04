//Comparing arrays
function arraysEqual(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  var i;
  var len = arr1.length;
  for (i = 0; i < len; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false