import { TiArrowUnsorted } from 'react-icons/ti';

export default function SearchBar() {
	return (
		<div className='flex w-full mt-3 text-gray-600 md:hidden mb-7'>
			<input
				type='search'
				name='serch'
				placeholder='Filter Anime'
				className='w-full h-10 px-5 text-sm rounded-md bg-theme-secondary focus:outline-none'
			/>
			<div className='flex items-center justify-center w-10'>
				<TiArrowUnsorted className='w-6 h-5 text-gray-400' />
			</div>
		</div>
	);
}
