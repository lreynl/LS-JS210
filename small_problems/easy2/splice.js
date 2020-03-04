//splice
function push(arr, elem) {
  arr[arr.length] = elem;
}

function splice(arr, start, len) {
  var i;
  var spliced = [];
  var arrSpliced = [];
  for (i = 0; i < arr.length; i++) {
    if (i >= start && i <= (start + len - 1)){
      push(spliced,arr[i]);
    } else {
      push(arrSpliced, arr[i]);
    }
  }
  arr.length = 0;
  arrSpliced.forEach(function(elem) {
    push(arr, elem);
  });
  return spliced;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
