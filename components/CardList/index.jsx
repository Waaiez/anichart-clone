import { SkeletonCard } from '../index';
import { Card } from '../index';

export default function CardList({ data, cardNum }) {
	console.log(data);
	return (
		<div className='card-list flex'>
			<div className='flex-1 mx-auto '>
				<div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-7'>
					{!data
						? [...Array(cardNum)].map((elementInArray, index) => (
								<SkeletonCard key={index} />
						  ))
						: data.Page.media.map((element, index) => (
								<Card data={element} key={element.id} />
						  ))}
				</div>
			</div>
		</div>
	);
}
