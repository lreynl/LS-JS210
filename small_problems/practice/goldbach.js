//Goldbach numbers
function checkGoldbach(num) {
  if (num < 4 || num % 2 !== 0) return;
  var a;
  var b;
  for (var i = 1; i < (num + 1) / 2; i++) {
    a = i;
    b = num - i;
    if (isPrime(a) && isPrime(b)) {
      console.log([a, b]);
    }
  }
}

checkGoldbach(100);