//shift
function shift(arr) {
  var len = arr.length;
  if (len === 0) return;
  var i;
  var shifted = arr[0];
  for (i = 1; i < len; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = len - 1;
  return shifted;
}