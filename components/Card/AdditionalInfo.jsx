import Link from 'next/link';
import Image from 'next/image';

function AdditionalInfo({ hashtag, links, trailer }) {
	return (
		<>
			<div className='flex justify-start w-11/12 2xl:w-4/5'>
				<div className='flex flex-col w-full'>
					<div className='text-theme-base text-xl xl:text-base xs:text-base font-semibold'>
						{hashtag && hashtag.split(' ')[0]}
					</div>
					<div
						className='text-theme-base text-xl xl:text-base xs:text-base
 font-semibold w-11/12 overflow'
					>
						links
					</div>
				</div>
			</div>
			<div className='flex justify-end w-4/12'>
				<div className='flex flex-col'>
					<div className='sm:flex hidden'>
						{trailer && (
							<Link href={trailer.id}>
								<a className='group'>
									<Image
										src={`${trailer.thumbnail}`}
										alt='Trailer Thumbnail'
										height='42px'
										width='75px'
									/>
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default AdditionalInfo;
