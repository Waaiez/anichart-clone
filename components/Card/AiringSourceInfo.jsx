function AiringSourceInfo({ relations, storedLanguage, source }) {
	let prequelInfo = relations.find((t) => t.relationType === 'PREQUEL');
	return (
		<div>
			{relations && (
				<div className='text-xs font-semibold truncate text-theme-base'>
					{prequelInfo !== undefined ? (
						'Sequel to ' +
						(prequelInfo.node.title[storedLanguage] ??
							prequelInfo.node.title.romaji ??
							prequelInfo.node.tite.native)
					) : (
						<span className='capitalize'>
							{source &&
								'Source • ' +
									source.toLowerCase().split('_').join(' ')}
						</span>
					)}
				</div>
			)}
		</div>
	);
}

export default AiringSourceInfo;
