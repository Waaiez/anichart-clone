import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import NavLinkSM from './NavLinkSM';

function NavbarSM({ seasonYear, currentYear, currentSeason, currentPath }) {
	const [isShowing, setIsShowing] = useState(false);

	return (
		<>
			{/* Shadow behind Navbar */}
			<div className='fixed md:hidden -inset-0.5 bottom-0 pt-8 pb-5 px-5 flex justify-items-start shadow-2xl sm-nav-wrap select-none '></div>
			{/* Shadow behind Navbar */}

			<div className='md:hidden fixed inset-x-0 bottom-0 pt-8 pb-5 px-5 flex justify-items-start shadow-2xl sm-nav-wrap z-50 select-none '>
				{/* Menu 1 - seasons */}
				<div className=' absolute bg-theme-secondary blur h-28 opacity-95 w-full inset-x-0 bottom-0'></div>
				{!isShowing && (
					<>
						<div className='relative bg-[#2b2d42] h-14 w-full z-100 rounded-md mr-5 flex justify-evenly shadow-2xl sm-seasons'>
							<NavLinkSM
								link={`/WINTER-${seasonYear}`}
								icon='winterIcon'
								iconText='Winter'
								path={currentSeason.split('-')[0]}
								pathMatch='WINTER'
							/>
							<NavLinkSM
								link={`/SPRING-${seasonYear}`}
								icon='springIcon'
								iconText='Spring'
								path={currentSeason.split('-')[0]}
								pathMatch='SPRING'
							/>
							<NavLinkSM
								link={`/SUMMER-${currentYear}`}
								icon='summerIcon'
								iconText='Summer'
								path={currentSeason.split('-')[0]}
								pathMatch='SUMMER'
							/>
							<NavLinkSM
								link={`/FALL-${currentYear}`}
								icon='fallIcon'
								iconText='Fall'
								path={currentSeason.split('-')[0]}
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
						<MenuIcon className='text-white h-10 z-100' />
					</div>
				</Switch>
			</div>
		</>
	);
}

export default NavbarSM;
