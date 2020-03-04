//Grade book
function getGrade(a, b, c) {
  var avg = (a + b + c) / 3.0;
  var grade;
  if (avg >= 90 && avg <= 100) {
    grade = 'A';
  } else if (avg >= 80 && avg < 90) {
    grade = 'B';
  } else if (avg >= 70 && avg < 80) {
    grade = 'C';
  } else if (avg >= 60 && avg < 70) {
    grade = 'D';
  } else if (avg >= 0 && avg < 60) {
    grade = 'F';
  }
  return grade;
}

console.log(getGrade(88,87,94));