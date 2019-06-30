function add (a, b) {
	return a + b;
}

function subtract (a , b) {
	return a - b;
}

function sum (arr) {
	let total = 0;
	arr.forEach(number => {
		total += number;
	});
	return total;
}

function multiply(arr) {
	let total = 1;

	arr.forEach(function(item) {
		total *= item;
	});
	return total;
}

function power(a, b) {
	let result = a;
	
	if (b == 0) {
		return 1;
	}

	for (let i = 1; i < b; i++) {
		result *= a;
	}
	return result;
}

function factorial(num) {
	let result = 1;

	for ( ;num > 0; num-- ) {
		result *= num
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}