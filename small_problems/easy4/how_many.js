//how many
var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function display(obj) {
  for (var key in obj) {
    console.log(key + ' => ' + obj[key]);
  }
}

function countOccurrences(arr) {
  var count = {};
  arr.forEach(function(elem) {
    if (count[elem]) {
      count[elem]++;
    } else {
      count[elem] = 1;
    }
  });
  
  display(count);
}

countOccurrences(vehicles);

/* console output
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/