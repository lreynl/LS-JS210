//concat
function push(arr, elem) {
  arr[arr.length] = elem;
}

function concat(arr1, arr2) {
  var newArr = [];
  arr1.forEach(function(elem) {
    push(newArr, elem);    
  });
  arr2.forEach(function(elem) {
    push(newArr, elem);
  });
  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]