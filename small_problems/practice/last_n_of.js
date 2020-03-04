//Last N of
function push(arr, elem) {
  arr[arr.length] = elem;
}

function lastNOf(arr, count) {
  var i;
  var len = arr.length;
  if (count > len) count = len;
  var lastN = [];
  for (i = len - count; i < len; i++) {
    lastN.push(arr[i]);
  }
  return lastN;
}

console.log(lastNOf(digits, 3));    // returns [4, 8, 15]
console.log(lastNOf(digits, 30));    // returns [4, 8, 15]