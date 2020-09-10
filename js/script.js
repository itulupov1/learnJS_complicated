'use strict';

const timeOne = () => {
	const arrMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	const arrDaysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	const newElem = document.createElement('div');
	document.body.append(newElem);

	const time = () => {
		const dateNow = new Date();
		const day = dateNow.getDate();
		const dayOfWeek = arrDaysWeek[dateNow.getDay()];
		const month = arrMonth[dateNow.getMonth()]; //arrMonth[dateNow.getMonth()];
		const year = dateNow.getFullYear();
		const hours = dateNow.getHours();
		const minutes = dateNow.getMinutes();
		const seconds = dateNow.getSeconds();
		return {day, dayOfWeek, month, year, hours, minutes, seconds};
	};

	const addNullToTimer = (times) => {
		if (times.toString().length === 1) {
			times = `0${times}`;
		}
		return times;
	};

	const declOfNum = (n, textForms) => {
		n = Math.abs(n) % 100; let n1 = n % 10;
		if (n > 10 && n < 20) { return textForms[2]; }
		if (n1 > 1 && n1 < 5) { return textForms[1]; }
		if (n1 === 1) { return textForms[0]; }
		return textForms[2];
	};

	const createNewElem = () => {
		const timer = time();
		newElem.append(`Сегодня ${timer.dayOfWeek}, ${addNullToTimer(timer.day)} ${timer.month} ${timer.year} года, ${addNullToTimer(timer.hours)} ${declOfNum(addNullToTimer(timer.hours), ['час', 'часа', 'часов'])} ${addNullToTimer(timer.minutes)} ${declOfNum(addNullToTimer(timer.minutes), ['минута', 'минуты', 'минут'])} ${addNullToTimer(timer.seconds)} ${declOfNum(addNullToTimer(timer.seconds), ['секунда', 'секунды', 'секунд'])}`);
	};
	createNewElem();

	const updateTime = () => {
		const timer = time();
		newElem.textContent = `Сегодня ${timer.dayOfWeek}, ${addNullToTimer(timer.day)} ${timer.month} ${timer.year} года, ${addNullToTimer(timer.hours)} ${declOfNum(addNullToTimer(timer.hours), ['час', 'часа', 'часов'])} ${addNullToTimer(timer.minutes)} ${declOfNum(addNullToTimer(timer.minutes), ['минута', 'минуты', 'минут'])} ${addNullToTimer(timer.seconds)} ${declOfNum(addNullToTimer(timer.seconds), ['секунда', 'секунды', 'секунд'])}`;
	};
	setInterval(updateTime, 1000);

};
timeOne();


const timeTwo = () => {
	const newElem = document.createElement('div');
	document.body.append(newElem);

	const time = () => {
		const dateNow = new Date();
		const day = dateNow.getDate();
		const month = dateNow.getMonth() + 1;
		const year = dateNow.getFullYear();
		const hours = dateNow.getHours();
		const minutes = dateNow.getMinutes();
		const seconds = dateNow.getSeconds();
		return { day, month, year, hours, minutes, seconds };
	};

	const addNullToTimer = (times) => {
		if (times.toString().length === 1) {
			times = `0${times}`;
		}
		return times;
	};

	const createNewElemTwo = () => {
		const timer = time();
		newElem.append(`${addNullToTimer(timer.day)}.${addNullToTimer(timer.month)}.${timer.year} - ${addNullToTimer(timer.hours)}:${addNullToTimer(timer.minutes)}:${addNullToTimer(timer.seconds)}`);
	};
	createNewElemTwo();

	const updateTimeTwo = () => {
		const timer = time();
		newElem.textContent = `${addNullToTimer(timer.day)}.${addNullToTimer(timer.month)}.${timer.year} - ${addNullToTimer(timer.hours)}:${addNullToTimer(timer.minutes)}:${addNullToTimer(timer.seconds)}`;
	};
	setInterval(updateTimeTwo, 1000);


};
timeTwo();