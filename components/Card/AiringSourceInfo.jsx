function AiringSourceInfo({ relations, storedLanguage, source }) {
	let prequelInfo = relations.find((t) => t.relationType === 'PREQUEL');
	return (
		<div>
			{relations && (
				<div className='text-theme-base text-xs font-semibold'>
					{prequelInfo !== undefined ? (
						'Sequel to ' +
						(prequelInfo.node.title[storedLanguage] ??
							prequelInfo.node.title.romaji ??
							prequelInfo.node.tite.native)
					) : (
						<span className='capitalize'>
							Source • {source.toLowerCase().split('_').join(' ')}
						</span>
					)}
				</div>
			)}
		</div>
	);
}

export default AiringSourceInfo;
