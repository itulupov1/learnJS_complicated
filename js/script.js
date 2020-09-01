'use strict';

const strFunc = function(arg) {
	if (typeof (arg) !== 'string'){
		console.log('В качестве аргумента используется не строка!');
		return 0;
	}
	arg = arg.trim();
	console.log(
		arg.length > 30 ? arg.slice(0, 30) + '...' : arg
	);

};

strFunc('В полученной(как аргумент) строке функция должна убрать все пробелы в начале и в конце');