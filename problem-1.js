function sumMultiples(limit) {
	var sum = 0

	for (let i = 1; i < limit; i++) {
		if (i % 5 === 0 || i % 3 === 0) // it's a multiple
			sum += i
	}
}


console.log(sumMultiples(1000))