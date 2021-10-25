import { SkeletonCard } from '../index';
export default function CardList({ data }) {
	return (
		<div className='card-list flex'>
			<div class='flex-1 mx-auto '>
				<div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:gap-5 md:gap-8'>
					{!data &&
						[...Array(6)].map((elementInArray, index) => (
							<SkeletonCard />
						))}
				</div>
			</div>
		</div>
	);
}
