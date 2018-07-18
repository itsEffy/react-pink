// @flow

const getDateFromJson = (jsonDate: string) => {
	const date = new Date();
	date.setTime(Date.parse(jsonDate));
	return date;
};

const getTimeInfoMinutes = (timeStamp: Date) => {
	const now = new Date();
	const timeInfoMs = Date.now() - timeStamp.getTime();
	return Math.floor(timeInfoMs / (1000 * 60));
};

const getTimeObject = (minutes: number) => {
	if (minutes < 60) {
		return { num: minutes, units: "minutes" };
	}
	const hours = Math.floor(minutes / 60);
	if (hours < 24) {
		return { num: hours, units: "hours" };
	}
	const days = Math.floor(hours / 24);
	if (days < 7) {
		return { num: days, units: "days" };
	}
	const weeks = Math.floor(days / 7);
	if (days < 30) {
		return { num: weeks, units: "weeks" };
	}
	const months = Math.floor(days / 30.5);
	if (days < 365) {
		return { num: months, units: "months" };
	}
	const years = Math.floor(days / 365);
	return { num: years, units: "years" };
};

const wordForm = {
	minutes: {
		one: "минуту",
		some: "минуты",
		many: "минут"
	},
	hours: {
		one: "час",
		some: "часа",
		many: "часов"
	},
	days: {
		one: "день",
		some: "дня",
		many: "дней"
	},
	weeks: {
		one: "неделю",
		some: "недели",
		many: "недель"
	},
	months: {
		one: "месяц",
		some: "месяца",
		many: "месяцев"
	},
	years: {
		one: "год",
		some: "года",
		many: "лет"
	}
};

type getTimeStringArgs = {
	timeObject: {
		num: number,
		units: "minutes" | "hours" | "days" | "weeks" | "months" | "years"
	}
};

// Довольно упрощенная функция без специальных случаев типа "вчера"
const getTimeStringRu = ({ num, units }) => {
	let amount;
	// такое может быть только в случае минут
	if (num === 0) {
		return "только что";
	} else if (num % 100 > 10 && num % 100 < 20) {
		amount = "many";
	} else {
		switch (num % 10) {
			case 1:
				amount = "one";
				break;
			case 2:
			case 3:
			case 4:
				amount = "some";
				break;
			default:
				amount = "many";
		}
	}
	const result = `${num > 1 ? num : ""} ${wordForm[units][amount]} назад`;
	return result.trim();
};

const getTimeInfo = (timestamp: string) =>
	getTimeStringRu(
		getTimeObject(getTimeInfoMinutes(getDateFromJson(timestamp)))
	);

export default getTimeInfo;
