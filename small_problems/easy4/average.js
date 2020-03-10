//average
function average() {
  var avg = Array.from(arguments)[0];
  avg = avg.reduce(function(acc, current) { 
    return acc + current; 
  }); 
  avg /= arguments[0].length;
  return Math.floor(avg);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40