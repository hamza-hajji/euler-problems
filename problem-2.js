function fibonacci_seq(limit) {
	let fib = []

	fib.push(1)
	fib.push(2)

	for (let i = 2; i <= LIMIT; i++) {
		fib[i] = fib[i - 1] + fib[i - 2]
	}

	return fib
}

var sum = fibonacci_seq(4e6)
.filter(function (elem) { // get the even numbers
	return elem % 2 === 0
})
.reduce(function (a, b) { // sum the elements
	return a + b
}, 0)

console.log(sum)