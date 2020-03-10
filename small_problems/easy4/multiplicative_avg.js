//multiplicative avg
function showMultiplicativeAverage(arr) {
  var mult = arr.reduce(function(acc, current) {
    return acc * current;
  });
  
  mult /= arr.length;
  return mult.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"