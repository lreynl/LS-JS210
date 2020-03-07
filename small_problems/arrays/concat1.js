//concat
function concat(arr1, arr2) {
  var i;
  var len = arr1.length;
  var concated = [];
  for (i = 0; i < len; i++) {
    concated.push(arr1[i]);
  }
  
  if (Array.isArray(arr2)) {
    len = arr2.length;
    for (i = 0; i < len; i++) {
      concated.push(arr2[i]);
    } 
  } else {
    concated.push(arr2);
  }
  
  return concated;
}


console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
console.log(newArray[2]);
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]
console.log(newArray[2]);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
console.log(arr3[5]);

obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]
console.log(arr3[5]);

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }
