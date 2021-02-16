/** @format */

function countPrimeNumbers() {
  var primes = 0;
  var isprime = true;
  for (var counter = 2; counter <= 100; counter = counter + 1) {
    isprime = true;
    var limit = Math.round(Math.sqrt(counter));
    for (var mod = 2; mod <= limit; mod++) {
      if (counter % mod == 0) {
        isprime = false;
        break;
      }
    }
    if (isprime) {
      primes = primes + 1;
    }
  }
  return primes;
}
var inn = performance.now();
countPrimeNumbers();
var out = performance.now();
console.log(
  'Execution time of printing countPrimeNumbers was ' +
    (out - inn) +
    ' milliseconds.'
);
