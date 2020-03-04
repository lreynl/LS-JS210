//Odd elements
function oddElementsOf(arr) {
  var i;
  var len = arr.length;
  var odds = [];
  for (i = 1; i < len; i += 2) {
    odds.push(arr[i]);
  }
  return odds;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]