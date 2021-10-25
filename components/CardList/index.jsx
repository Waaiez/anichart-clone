import { SkeletonCard } from '../index';
export default function CardList({ data }) {
	return (
		<div className='card-list flex'>
			<div className='flex-1 mx-auto '>
				<div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-8'>
					{!data &&
						[...Array(6)].map((elementInArray, index) => (
							<SkeletonCard key={index}/>
						))}
				</div>
			</div>
		</div>
	);
}
