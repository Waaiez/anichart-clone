import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

export function renderAiringInfo(schedule, status, episodes) {
	if (schedule) {
		if (moment(schedule.airingAt * 1000).diff(moment(), 'days') > 30) {
			if (episodes === 1) return '1 Episode airing on';
			if (episodes > 1)
				return `Ep ${schedule.episode} of ${episodes} airing on`;
			if (status === 'NOT_YET_RELEASED') return 'Airing on';
			return `Ep ${schedule.episode} airing on`;
		}
		return `Ep ${schedule.episode} ${
			episodes ? `of ${episodes}` : ''
		} airing in`;
	} else if (status === 'FINISHED') {
		if (episodes === 1) {
			return '1 Episode aired on';
		} else {
			return `${episodes} Episodes aired on`;
		}
	} else {
		if (!episodes && status === 'RELEASING') return 'Airing on';
		return 'Airing in';
	}
}

export function renderAiringDate(schedule, startDate) {
	// If there is a schedule render the time until
	if (schedule) {
		// If the next schedule date is more than 30 days away, render the full date else render the time until it airs
		if (moment(schedule.airingAt * 1000).diff(moment(), 'days') > 30) {
			return (
				moment(startDate.day, 'DD').format('DD') +
				' ' +
				moment(startDate.month, 'MM').format('MMMM') +
				' ' +
				startDate.year
			);
		} else {
			return moment
				.duration(moment(schedule.airingAt * 1000).diff(moment()))
				.format('d [days,]h [hours,]m [mins]')
				.split(',')
				.slice(0, 2)
				.join(', ');
		}
	} else {
		let dateArr = [];
		if (startDate.day) {
			dateArr.push(moment(startDate.day, 'DD').format('DD'));
		}
		if (startDate.month) {
			dateArr.push(moment(startDate.month, 'MM').format('MMMM'));
		}
		if (startDate.year) {
			dateArr.push(startDate.year);
		}
		return dateArr.join(' ');
	}
}
