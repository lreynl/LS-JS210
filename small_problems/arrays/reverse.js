//reverse
function reverseString(str) {
  var i;
  var reversed = '';
  var len = str.length;
  for (i = len - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseArray(arr) {
  var reversed = [];
  arr.forEach(function(elem) {
    reversed.unshift(elem);
  });
  return reversed;
}

function reverse(inputForReversal) {
  var reversed;
  var i;
  var len;
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]