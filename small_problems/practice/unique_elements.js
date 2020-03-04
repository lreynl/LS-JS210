//unique elements
function uniqueElements(arr) {
  var i = 0;
  
  arr = sortDescending(arr);
  var result = [];
  
  while (arr[i] !== undefined) {
    if (arr[i] === arr[i + 1]) {
      i++;
    } else {
      result.push(arr[i]);
      i++;
    }
  }
  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));