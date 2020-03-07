//splice 
function splice(array, start, deleteCount, element1, elementN) {
  var len = array.length;
  if (deleteCount > len - start) deleteCount = len - start;
  var first = [];
  var middle = [];
  var last = [];
  var cut = [];
  var toAddArgIndex = 3;
  var i, j;
  
  if (arguments[toAddArgIndex]) {//push elements to add (if any) into 'middle' array
    i = toAddArgIndex;
    while (arguments[i]) {
      middle.push(arguments[i]);
      i++;
    }
  } 
  
  for (i = 0; i < start; i++) {//push elements before splice into 'first' array
    first.push(array[i]);
  }
  
  for (i = start; i < start + deleteCount; i++) {//push elements to delete into 'cut' array
    cut.push(array[i]);
  }
  
  for (i = start + deleteCount; i < len; i++) {//push elements after cut into 'last' array
    last.push(array[i]);
  }
  
  //overwrite 'array' with values from the three new arrays
  i = 0;
  j = 0;
  while (j < first.length) {
    array[i] = first[j];
    i++;
    j++;
  }
  
  j = 0;
  while (j < middle.length) {
    array[i] = middle[j];
    i++; 
    j++;
  }
  
  j = 0;
  while (j < last.length) {
    array[i] = last[j];
    i++;
    j++;
  }
  
  //adjust length of 'array'
  array.length = first.length + middle.length + last.length;
  
  return cut;
}

console.log("*splice");
console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]