//join
function join(arr, sep) {
  var joined = '';
  var i;
  var len = arr.length;
  for (i = 0; i < len - 1; i++) {
    joined += (String(arr[i]) + String(sep));
  }
  joined += String(arr[i]);
  return joined;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'