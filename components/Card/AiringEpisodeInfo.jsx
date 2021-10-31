function AiringEpisodeInfo({ schedule, status, episodes }) {
	return (
		<div className='text-theme-base xs:text-xs text-sm font-semibold'>
			{schedule
				? `Ep ${schedule.episode} ${
						episodes ? `of ${episodes}` : ''
				  } airing in`
				: status === 'FINISHED'
				? episodes === 1
					? `${episodes} Episode aired on`
					: `${episodes} Episodes aired on`
				: 'Airing in'}
		</div>
	);
}

export default AiringEpisodeInfo;
