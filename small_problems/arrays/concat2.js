//concat 2
function concat2() {
  var i;
  var j;
  var len;
  var elem;
  var concated = [];
  var argsLen = arguments.length;
  
  for (i = 0; i < argsLen; i++) {
    elem = arguments[i];
    if (Array.isArray(elem)) {
      len = elem.length;
      for (j = 0; j < len; j++) {
        concated.push(elem[j]);
      } 
    } else {
      concated.push(elem);
    }
  }
  
  return concated;
}

console.log(concat2([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat2([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat2([1, 2], ['three'], 4));               // [1, 2, "three", 4]

//pop
function pop(arr) {
  var len = arr.length;
  if (len === 0) return;
  var popped = arr[len - 1];
  arr.length = len - 1;
  return popped;
}

var array = [1, 2, 3];
pop(array);                        // 3
console.log(array);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]
