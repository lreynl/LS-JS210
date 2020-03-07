//slice
function slice(arr, begin, end) {
  var len = arr.length;
  if (len === 0 || end === 0 || begin > len) return [];
  var i;
  var j;
  var temp;
  var sliced = [];
  
  if (begin > end) {
    temp = begin;
    begin = end;
    end = temp;
  }
  
  for (i = begin, j = 0; i < end && i < len; i++, j++) {
    sliced[j] = arr[i];
  }
  
  return sliced;
}

console.log("*slice");
console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]