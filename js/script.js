'use strict';

// lesson05-complicated

const arr = [];

arr.push('2574', '16582', '7896', '47614', '761258', '45762', '789621');

for (let i = 0; i < arr.length; i++) {
	if (arr[i].substr(0, 1) === '2') {
		console.log(arr[i]);
	} else if (arr[i].substr(0, 1) === '4') {
		console.log(arr[i]);
	}
}


function isPrime(num) {
	let start = 2;
	const limit = Math.sqrt(num);
	while (start <= limit) {
		if (num % start++ < 1) {
			return false;
		}
	}
	return num > 1;
}

for (let i = 2; i < 100; i++) {
	if (isPrime(i) === true) {
		console.log(`Делители этого числа: 1 и ${i}`);
	}
}

