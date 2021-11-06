import { CameraIcon, SearchIcon, ShareIcon } from '@heroicons/react/outline';
import useInView from 'react-cool-inview';
import { TiArrowUnsorted } from 'react-icons/ti';

import { CardList } from '../index';

export default function DataSection({ name, data, skeletonCardNum }) {
	const { observe, inView } = useInView({
		onEnter: ({ unobserve }) => unobserve(),
	});

	return name === 'TV' ? (
		<section className='w-full'>
			<div className='flex justify-between w-full mb-5'>
				<div className='flex justify-start w-full text-2xl font-bold md:text-white text-theme-base'>
					{name}
				</div>
				<div className='justify-end hidden md:flex'>
					<ShareIcon className='w-6 h-6 mx-2 text-gray-400' />
					<CameraIcon className='w-6 h-6 mx-2 text-gray-400' />
					<SearchIcon className='w-6 h-6 mx-2 text-gray-400' />
					<TiArrowUnsorted className='w-6 h-6 mx-2 text-gray-400' />
				</div>
			</div>
			<CardList data={data} skeletonCardNum={skeletonCardNum} />
		</section>
	) : (
		<section className='w-full mt-10' ref={observe}>
			{inView && (
				<>
					<div className='flex justify-start w-full my-5 text-2xl font-bold text-theme-base'>
						{name}
					</div>

					<CardList data={data} skeletonCardNum={skeletonCardNum} />
				</>
			)}
		</section>
	);
}
