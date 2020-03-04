//mirrored array
function mirroredArray(arr) {
  var i;
  var len = arr.length;
  var mirroredArr = [];
  
  for (i = 0; i < len; i++) {
    mirroredArr.push(arr[i]);
  }
  
  for (i = len - 1; i >= 0; i--) {
    mirroredArr.push(arr[i]);
  }
  
  return mirroredArr;
}

console.log(mirroredArray([1,2,3,4,5]));