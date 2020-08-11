'use strict';
const lang = 'en'; // По условию 'ru' или 'en'
let array;
const namePerson = 'Артем'; // Можно подставить любое имя

//Вариант a, через if
if (lang === 'en') {
	array = ['m, ts, w, th, f, st, sn'];
} else if (lang === 'ru') {
	array = ['пн, вт, ср, чт, пт, сб, вс'];
} else {
	console.log('Что-то пошло не так');
}
console.log(array);

//Вариант b, через switch-case
switch (lang) {
	case 'en':
		array = ['m, ts, w, th, f, st, sn'];
		break;
	case 'ru':
		array = ['пн, вт, ср, чт, пт, сб, вс'];
		break;
	default:
		console.log('Что-то пошло не так');
		break;
}
console.log(array);

//Вариант c, через массив
array = {
	'en': ['m, ts, w, th, f, st, sn'],
	'ru': ['пн, вт, ср, чт, пт, сб, вс'],
};
console.log(array[lang]);

//Тернарный оператор
let position = (namePerson === 'Артем') ? console.log('Артем', 'Директор') : 
(namePerson === 'Максим') ? console.log('Максим', 'Преподователь') : 
console.log(namePerson, 'Студент'); 
