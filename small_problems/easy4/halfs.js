function halvsies(arr) {
  if (arr.length < 2) {
    return [arr, []];
  }
  
  var len = arr.length;
  var midPoint;
  
  if (len % 2 == 0) {
    midPoint = len / 2;
    return [arr.slice(0, midPoint), arr.slice(midPoint)];
  } else {
    midPoint = len / 2 + 1;
    return [arr.slice(0, midPoint), arr.slice(midPoint)];
  }
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]