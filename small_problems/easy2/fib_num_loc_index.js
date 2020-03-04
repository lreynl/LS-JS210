//Fibonacci number location by length
function findFibonacciIndexByLength(digits) {
  var a = 0;
  var b = 1;
  var index = 1;
  var fib = 0;
  while (Math.log10(fib, 10) < digits - 1) {
    fib = a + b;
    a = b;
    b = fib;
    index += 1;
  }
  return index;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74