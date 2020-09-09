'use strict';

const week = [];
const dateNow = new Date();
const btn = document.querySelector('button');

week.push('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');

const showDaysOfWeek = () => {
	week.forEach((item, index) => {
		const newElem = document.createElement('p');
		newElem.textContent = item;
		newElem.style.fontSize = `22px`;

		if (item === 'сб' || item === 'вс') {
			newElem.style.fontStyle = 'italic';
		}

		if (index === dateNow.getDay() - 1) {
			newElem.style.fontWeight = `bold`;
		}
		if (dateNow.getDay() - 1 < 0) {
			if (index === 6) {
				newElem.style.fontWeight = `bold`;
			}
		}
		document.body.append(newElem);
	});
};


btn.addEventListener('click', () => {
	showDaysOfWeek();
	btn.setAttribute('disabled', true);
});