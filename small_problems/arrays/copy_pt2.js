//copy pt2
function copy(arr) {
  var copy = [];
  var i;
  var len = arr.length;
  for (i = 0; i < len; i++) {
    copy.push(arr[i]);
  }
  return copy;
}

function copy2(arr) {
  var copy = [];
  var i;
  var len = arr.length;
  while (i < len) {
    copy[i] = arr[i];
    ++i;
  }
  return copy;
}