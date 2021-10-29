function GenreInfo({ genres, colour }) {
	return (
		<>
			{genres &&
				genres.map((element, index) => (
					<div
						className='h-full flex items-center overflow-hidden flex-wrap'
						key={index}
					>
						<div
							className='h-7 genre rounded-full px-3 mx-1 text-xs flex items-center font-semibold bg-blend-difference'
							style={{
								'--genre-colour': colour ? colour : '#69C3F0',
								'--genre-opacity': 1,
							}}
						>
							<span className='text-black mix-blend-multiply'>{element}</span>
						</div>
					</div>
				))}
		</>
	);
}

export default GenreInfo;
