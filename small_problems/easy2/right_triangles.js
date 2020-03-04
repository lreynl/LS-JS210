//Right triangles
function triangle(num) {
  if (num < 1) return '';
  var i = 0;
  while (i < num) { 
    console.log(' '.repeat(num - 1 - i) + '*'.repeat(1 + i));
    i++;
  }
}

triangle(0);
triangle(5);
triangle(9);
