//copy properties
function copyProperties(obj1, obj2) {
  for (var prop in obj1) {
    obj2[prop] = obj1[prop];
  }
  return Object.keys(obj1).length;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }