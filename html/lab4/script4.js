console.log("Script 4: Calculating primes");
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("First 10 primes:", Array.from({ length: 50 }, (_, i) => i).filter(isPrime).slice(0, 10));
