'use strict';

const num = 266219;

function multi() {
	let resultMultiplication = 1;
	for (let i = 0; i < num.toString().length; i++) {
		resultMultiplication *= +num.toString()[i];
	}
	return resultMultiplication;
}
let multiPlication = multi();
console.log(multiPlication);
let multiplPow = multiPlication **3;

console.log(multiplPow.toString().slice(0,2));