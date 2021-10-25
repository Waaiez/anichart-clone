import { useState } from 'react';
import { Switch } from '@headlessui/react';
import {
	MenuIcon,
	CalendarIcon,
	ArchiveIcon,
	ChevronDoubleRightIcon,
	CogIcon,
} from '@heroicons/react/outline';
import { FaRegSnowflake, FaSeedling, FaSun, FaLeaf } from 'react-icons/fa';

export default function Navbar() {
	const [isShowing, setIsShowing] = useState(false);

	return (
		<>
			{/* SM Navbar */}
			<div className='md:hidden fixed inset-x-0 bottom-0 pt-8 pb-5 px-5 flex justify-items-start shadow-2xl sm-nav-wrap'>
				{/* Menu 1 - seasons */}
				{!isShowing && (
					<div className='bg-[#2b2d42] h-14 w-full z-100 rounded-md mr-5 flex justify-evenly shadow-2xl sm-seasons'>
						<div className='my-2 flex flex-col w-full'>
							<FaRegSnowflake className='text-white h-5 w-5 flex mx-auto' />
							<div className='text-xs text-center text-white'>
								Winter
							</div>
						</div>
						<div className='my-2 flex flex-col w-full'>
							<FaSeedling className='text-white h-5 w-5 flex mx-auto' />
							<div className='text-xs text-center text-white'>
								Spring
							</div>
						</div>
						<div className='my-2 flex flex-col w-full'>
							<FaSun className='text-white h-5 w-5 flex mx-auto' />
							<div className='text-xs text-center text-white'>
								Summer
							</div>
						</div>
						<div className='my-2 flex flex-col w-full'>
							<FaLeaf className='text-white h-5 w-5 flex mx-auto' />
							<div className='text-xs text-center text-white'>
								Fall
							</div>
						</div>
					</div>
				)}
				{/* Menu 2 - charts */}
				{isShowing && (
					<div className='bg-[#2b2d42] h-14 w-full z-100 rounded-md mr-5 flex justify-evenly shadow-2xl sm-charts'>
						<div className='my-2 flex flex-col w-full'>
							<ArchiveIcon className='text-white h-5 w-5 flex mx-auto' />
							<div className='text-xs text-center text-white'>
								Archive
							</div>
						</div>
						<div className='my-2 flex flex-col w-full'>
							<ChevronDoubleRightIcon className='text-white h-5 w-5 flex mx-auto' />
							<div className='text-xs text-center text-white'>
								TBA
							</div>
						</div>
						<div className='my-2 flex flex-col w-full'>
							<CalendarIcon className='text-white h-5 w-5 flex mx-auto' />
							<div className='text-xs text-center text-white'>
								Airing
							</div>
						</div>
						<div className='my-2 flex flex-col w-full'>
							<CogIcon className='text-white h-5 w-5 flex mx-auto' />
							<div className='text-xs text-center text-white'>
								Settings
							</div>
						</div>
					</div>
				)}

				{/* Settings Icon */}
				<Switch checked={isShowing} onChange={setIsShowing}>
					<div className='bg-[#2b2d42] h-14 w-16 z-100 rounded-md flex items-center justify-center shadow-2xl sm-menu'>
						<MenuIcon className='text-white h-10' />
					</div>
				</Switch>
			</div>

			{/* MD and above Navbar */}
		</>
	);
}
