var myArray = [5, 5];
myArray[-1] = 5;// [5, 5, '-1': 5]
myArray[-2] = 5;// [5, 5, '-1': 5, '-2': 5]

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];//for i=-2 & i=-1, i is coerced to string;
    //all myArray values get accessed
  }

  return sum / array.length;//array objects can hold properties
  //with strings for keys, but .length only counts the indexed
  //array values.
  //use Object.keys(myArray).length to get the array indices
  //plus the property keys.
}

average(myArray);//returns 10