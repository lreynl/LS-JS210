//Prime check
function isPrime(num) {
  if (num < 2) return false;
  if (num % 2 === 0) return false;
  if (num === 2) return true;
  for (var i = 3; i <= Math.sqrt(num); i = i + 2) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(16));
console.log(isPrime(17));
console.log(isPrime(18));
console.log(isPrime(19));
console.log(isPrime(1771));