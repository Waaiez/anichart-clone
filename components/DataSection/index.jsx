import { CardList } from '../index';
import useInView from 'react-cool-inview';

export default function DataSection({ name, data, skeletonCardNum }) {
	const { observe, inView } = useInView({
		onEnter: ({ unobserve }) => unobserve(),
	});

	return (
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
