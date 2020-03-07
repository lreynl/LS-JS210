//push
function push(arr, ...elem) {
  var len;
  var elemLen = elem.length;
  var i;
  for (i = 0; i < elemLen; i++) {
    len = arr.length;
    arr[len] = elem[i];
  }
  len = arr.length;
  return len;
}

array = [1, 2, 3];
push(array, 4, 5, 6);              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0