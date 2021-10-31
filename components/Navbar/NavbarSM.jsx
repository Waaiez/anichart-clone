import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import NavLinkSM from './NavLinkSM';
import { Switch } from '@headlessui/react';
import { useState } from 'react';

function NavbarSM({ season, currentPath, currentLocation }) {
	const [isShowing, setIsShowing] = useState(false);

	return (
		<>
			{/* Shadow behind Navbar */}
			<div className='fixed md:hidden -inset-0.5 bottom-0 pt-8 pb-5 px-5 flex justify-items-start shadow-2xl sm-nav-wrap select-none '></div>
			{/* Shadow behind Navbar */}

			<div className='fixed inset-x-0 bottom-0 z-50 h-5 text-sm text-center text-white bg-red-500 md:hidden animate-pulse'>
				This is an <span className='font-bold'>UNOFFICAL</span> clone of
				Anichart. Visit the <span className='font-bold'>OFFICAL</span>{' '}
				site at{' '}
				<Link href='https://anichart.net/'>
					<a className='text-blue-600 underline hover:text-blue-800'>
						https://anichart.net/
					</a>
				</Link>
			</div>

			<div className='fixed inset-x-0 bottom-0 z-40 flex px-5 pt-8 pb-5 shadow-2xl select-none md:hidden justify-items-start sm-nav-wrap '>
				{/* Menu 1 - seasons */}
				<div className='absolute inset-x-0 bottom-0 w-full bg-theme-secondary blur h-28 opacity-95'></div>
				{!isShowing && (
					<>
						<div className='relative bg-[#2b2d42] h-14 w-full z-100 rounded-md mr-5 flex justify-evenly shadow-2xl sm-seasons'>
							<NavLinkSM
								link={`/WINTER-${season.WINTER.year}`}
								icon='winterIcon'
								iconText='Winter'
								path={currentLocation.split('-')[0]}
								pathMatch='WINTER'
							/>
							<NavLinkSM
								link={`/SPRING-${season.SPRING.year}`}
								icon='springIcon'
								iconText='Spring'
								path={currentLocation.split('-')[0]}
								pathMatch='SPRING'
							/>
							<NavLinkSM
								link={`/SUMMER-${season.SUMMER.year}`}
								icon='summerIcon'
								iconText='Summer'
								path={currentLocation.split('-')[0]}
								pathMatch='SUMMER'
							/>
							<NavLinkSM
								link={`/FALL-${season.FALL.year}`}
								icon='fallIcon'
								iconText='Fall'
								path={currentLocation.split('-')[0]}
								pathMatch='FALL'
							/>
						</div>
					</>
				)}
				{/* Menu 2 - charts */}
				{isShowing && (
					<div className='relative bg-[#2b2d42] h-14 w-full rounded-md mr-5 flex justify-evenly shadow-2xl sm-charts z-100'>
						<NavLinkSM
							link={`/archive`}
							icon='archiveIcon'
							iconText='Archive'
							path={currentPath}
							pathMatch='archive'
						/>
						<NavLinkSM
							link={`/tba`}
							icon='chevronIcon'
							iconText='TBA'
							path={currentPath}
							pathMatch='tba'
						/>
						<NavLinkSM
							link={`/airing`}
							icon='calendarIcon'
							iconText='Airing'
							path={currentPath}
							pathMatch='airing'
						/>
						<NavLinkSM
							link={`/settings`}
							icon='cogIcon'
							iconText='Settings'
							path={currentPath}
							pathMatch='settings'
						/>
					</div>
				)}

				{/* Menu Icon */}
				<Switch checked={isShowing} onChange={setIsShowing}>
					<div className='relative bg-[#2b2d42] h-14 w-16 z-100 rounded-md flex items-center justify-center shadow-2xl sm-menu'>
						<MenuIcon className='h-10 text-white z-100' />
					</div>
				</Switch>
			</div>
		</>
	);
}

export default NavbarSM;
