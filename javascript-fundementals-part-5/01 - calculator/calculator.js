function add (...args) {
	let add = 0;
	for(let i = 0; i < args.length; i++) {
		add += Number(args[i]);
	}
	return add;
}

function subtract (...args) {
	let subtract = args[0];
	for (let i = 1; i < args.length; i++) {
		subtract -= Number(args[i]);
	}
	return subtract;
}

function sum (...args) {
	let sum = 0;
	let array = args[0];
	for (let i = 0; i < array.length; i++) {
		sum += Number(array[i]);
	}
	return sum;
}

function multiply (...args) {
	let multiply = 1;
	let array = args[0];
	for (let i = 0; i < array.length; i++) {
		multiply *= array[i];
	}
	return multiply;
}

function power(...args) {
	return Math.pow(args[0], args[1]);
}

function factorial(...args) {
	let factorial = 1;
	for (let i = 0; i < args[0]; i++) {
		factorial *= (args[0]-i);
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
  power,
	factorial
}
