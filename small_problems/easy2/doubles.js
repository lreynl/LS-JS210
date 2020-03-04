//Double doubles
function isDoubleNumber(num) {
  num = String(num);
  if (num.length % 2 === 1) return false;
  var len = num.length / 2;
  return num.slice(0, len) === num.slice(len);
}

function twice(num) {
  return isDoubleNumber(num) ? num : num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676