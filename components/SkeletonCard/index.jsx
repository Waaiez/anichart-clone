export default function SkeletonCard() {
	return (
		<div className='w-full sm:h-72 xs:h-60 max-h-72'>
			<div className='flex bg-theme-secondary drop-shadow-xl overflow-hidden h-full'>
				<div className='w-2/5 bg-cover bg-gray-400 animate-pulse'></div>
				<div className='w-3/5 p-4'>
					<p className='leading-relaxed mb-3 w-full h-6 animate-pulse bg-gray-400'></p>
					<br />
					<p className='leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-400'></p>
					<p className='leading-relaxed mb-3 w-2/3 h-2 animate-pulse bg-gray-400'></p>
					<p className='leading-relaxed mb-3 w-1/2 h-2 animate-pulse bg-gray-400'></p>
				</div>
			</div>
		</div>
	);
}
