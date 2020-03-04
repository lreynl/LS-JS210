//first N of
function push(arr, elem) {
  arr[arr.length] = elem;
}

function firstNOf(arr, count) {
  var i;
  var len = arr.length;
  var firstN = [];
  for (i = 0; i < count && i < len; i++) {
    firstN.push(arr[i]);
  }
  return firstN;
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]
console.log(firstNOf(digits, 30));    // returns [4, 8, 15, 16, 23, 42]