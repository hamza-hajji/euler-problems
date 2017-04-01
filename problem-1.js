var sum = 0
var LIMIT = 1000

for (let i = 1; i < LIMIT; i++) {
	if (i % 5 === 0 || i % 3 === 0) // it's a multiple
		sum += i
}

console.log(sum)