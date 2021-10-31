import {
	EmojiHappyIcon,
	EmojiSadIcon,
	HeartIcon,
	PlusCircleIcon,
} from '@heroicons/react/outline';

function Rankings({ averageScore, rankings }) {
	return (
		<>
			<div className='flex'>
				{averageScore && (
					<>
						<div>
							{averageScore >= 75 && (
								<EmojiHappyIcon className='w-6 h-6 font-bold text-green-500' />
							)}
							{averageScore <= 74 && averageScore >= 61 && (
								<EmojiHappyIcon className='h-6 w-6 text-[#f79a63] font-bold' />
							)}
							{averageScore <= 60 && (
								<EmojiSadIcon className='w-6 h-6 font-bold text-red-500' />
							)}
						</div>
						<div className='ml-1 text-sm font-semibold text-theme-base'>
							{averageScore}%
						</div>
					</>
				)}
			</div>
			<div className='flex'>
				{rankings && (
					<>
						{rankings.find(
							(t) => t.season !== null && t.type === 'POPULAR'
						) !== undefined && (
							<div>
								<HeartIcon className='w-6 h-6 text-red-600' />
							</div>
						)}
						<div className='flex items-center ml-2 text-sm font-bold text-theme-base'>
							{rankings.find(
								(t) => t.season !== null && t.type === 'POPULAR'
							) !== undefined &&
								'#' +
									rankings.find(
										(t) =>
											t.season !== null &&
											t.type === 'POPULAR'
									).rank}
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default Rankings;
