var LIMIT = 10,
	fib = [],
	sum = 0

fib.push(1)
fib.push(2)

for (let i = 2; i <= LIMIT; i++) {
	fib[i] = fib[i - 1] + fib[i - 2]
}

// filtering only even numbers and summing them

sum = fib.filter(function (elem) {
	return elem % 2 === 0
}).reduce(function (a, b) {
	return a + b
}, 0)