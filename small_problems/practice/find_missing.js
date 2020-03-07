//find missing
function missing(arr) {
  var i = arr[0];
  var max = arr[arr.length - 1];
  var len = arr.length;
  var missing = [];
  for (; i < max; i++) {
    if (!arr.includes(i)) missing.push(i);
  }
  return missing;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []