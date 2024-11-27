'use strict'

// Define the upper limit for checking primes
const number = 237;

// in - int number (upper bound for prime checking)
// out - if the number is prime, return true; otherwise return false
function isPrime(num) {
  if (num <= 1)
    return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0)
      return false;
  }
  return true;
}

// Loop through numbers from 2 to number-1 and check for primes
for (let i = 2; i < number; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
