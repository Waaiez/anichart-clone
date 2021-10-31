import { Card } from '../index';
import { SkeletonCard } from '../index';

export default function CardList({ data, skeletonCardNum }) {
	console.log('data', data);
	return (
		<div className='flex card-list'>
			<div className='flex-1 mx-auto '>
				<div className='grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3 md:gap-7'>
					{!data ? (
						[...Array(skeletonCardNum)].map(
							(elementInArray, index) => (
								<SkeletonCard key={index} />
							)
						)
					) : data.length ? (
						data.map((element, index) => (
							<Card data={element} key={element.id} />
						))
					) : (
						<div className='flex justify-start flex-grow text-xl font-bold col-span-full text-theme-base'>
							There are currently no entries in this section.
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
