//Student grade
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function average(grades) {
  return sum(grades) / grades.length;
}

function grade(list) {
  var avg = average(list);
  var grade;
  if (avg >= 90 && avg <= 100) grade = 'A';
  if (avg >= 70 && avg < 90) grade = 'B';
  if (avg >= 50 && avg < 70) grade = 'C';
  if (avg < 50) grade = 'F';
  return grade;
}

console.log(grade([88.7, 90.6, 75.9, 80.2]));