export default function SkeletonCard() {
	return (
		<div className=' max-h-72 min-w-96'>
			<div className='h-72 rounded-md drop-shadow-xl border-2 border-gray-200 overflow-hidden bg-gray-100 flex'>
				<div className='bg-gray-400 h-full w-4/5 animate-pulse'></div>
				<div className='flex flex-col w-full mx-4 mt-4'>
					<p className='leading-relaxed mb-3 w-full h-7 animate-pulse bg-gray-400'></p>
					<br />
					<p className='leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400'></p>
					<p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400'></p>
					<p className='leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400'></p>
				</div>
			</div>
		</div>
	);
}
