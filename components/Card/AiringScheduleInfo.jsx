import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

function AiringScheduleInfo({ schedule, startDate }) {
	momentDurationFormatSetup(moment);

	return (
		<div
			className='text-theme-base text-xl xs:text-base
 font-semibold'
		>
			{schedule
				? moment
						.duration(
							moment(schedule.airingAt * 1000).diff(moment())
						)
						.format('d [days,]h [hours,]m [mins]')
						.split(',')
						.slice(0, 2)
						.join(', ')
				: startDate.day
				? moment(startDate.day, 'DD').format('DD') +
				  ' ' +
				  moment(startDate.month, 'MM').format('MMMM') +
				  ' ' +
				  startDate.year
				: startDate.month
				? moment(startDate.month, 'MM').format('MMMM') +
				  ' ' +
				  startDate.year
				: startDate.year}
		</div>
	);
}

export default AiringScheduleInfo;
