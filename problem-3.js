function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false
	}

	return true
}

function primeFactors(limit) {
	let primes = []

	for (let i = 2; i <= limit; i++) {
		if (limit % i ===0 && isPrime(i))
			primes.push(i)
	}

	return primes
}

function maxPrimeFactor(limit) {
	return Math.max.apply(null, primeFactors(limit))
}

var answer = maxPrimeFactor(600851475143)

console.log(answer)