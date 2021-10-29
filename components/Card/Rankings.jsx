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
								<EmojiHappyIcon className='h-6 w-6 text-green-500 font-bold' />
							)}
							{averageScore <= 74 && averageScore >= 61 && (
								<EmojiHappyIcon className='h-6 w-6 text-[#f79a63] font-bold' />
							)}
							{averageScore <= 60 && (
								<EmojiSadIcon className='h-6 w-6 text-red-500 font-bold' />
							)}
						</div>
						<div className='text-theme-base text-sm font-semibold ml-1'>
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
								<HeartIcon className='h-6 w-6 text-red-600' />
							</div>
						)}
						<div className='text-theme-base text-sm font-bold ml-2'>
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
