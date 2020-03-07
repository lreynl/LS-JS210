//unshift
function unshift(arr, ...items) {
  var len = arr.length;
  var itemsLen = items.length;
  var i;
  
  for (i = len + itemsLen - 1; i >= 0; i--) {
    arr[i] = arr[i - itemsLen];
    if (i < itemsLen) {
      arr[i] = items[i];
    }
  }
  
  return arr.length;
}

console.log("*shift & unshift");
console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]