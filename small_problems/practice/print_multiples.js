//Print multiples
function logMultiples(num) {
  temp = []
  for (var i = num; i < 100; i += num) {
    if (i % 2 !== 0) temp.unshift(i);
  }
  temp.forEach(function(elem) {
    console.log(elem);
  });
}

logMultiples(17);