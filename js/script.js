'use strict';

const lang = 'en'; // По условию 'ru' или 'en'
const ruWeek = ['пн, вт, ср, чт, пт, сб, вс'];
const enWeek = ['m, ts, w, th, f, st, sn'];

//Вариант a, через if

if (lang === 'en') {
	console.log(enWeek);
} else if (lang === 'ru') {
	console.log(ruWeek);
} else {
	console.log('Что-то пошло не так');
}

//Вариант b, через switch-case
switch (lang) {
	case 'en':
		console.log(enWeek);
		break;
	case 'ru':
		console.log(ruWeek);
		break;
	default:
		console.log('Что-то пошло не так');
		break;
}

//Вариант c, через массив
const arr = [
	['m, ts, w, th, f, st, sn'],
	['пн, вт, ср, чт, пт, сб, вс'],
];

if (lang === 'en') {
	console.log(arr[0]);
} else if (lang === 'ru') {
	console.log(arr[1]);
} else {
	console.log('Что-то пошло не так');
}


//Тернарный оператор
const namePerson = 'Артем';
console.log(
	(namePerson === 'Артем') ? 'Директор' :
		(namePerson === 'Максим') ? 'Преподователь' : 'Студент'
);

