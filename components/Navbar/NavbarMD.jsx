import {
	ArchiveIcon,
	CalendarIcon,
	ChevronDoubleRightIcon,
	CogIcon,
} from '@heroicons/react/outline';

import Image from 'next/image';
import Link from 'next/link';
import NavLinkMD from './NavLinkMD';

function NavbarMD({ season, currentPath, currentLocation }) {
	return (
		<div className='hidden select-none md:block'>
			{/* Backround behind Navbar */}
			<div className='absolute inset-x-0 top-0 z-20 justify-center text-center text-white bg-red-500 h-7 animate-pulse'>
				This is an <span className='font-bold'>UNOFFICAL</span> clone of
				Anichart. Visit the <span className='font-bold'>OFFICAL</span>{' '}
				site at{' '}
				<Link href='https://anichart.net/'>
					<a className='text-blue-600 underline hover:text-blue-800'>
						https://anichart.net/
					</a>
				</Link>
			</div>
			<div className='bg-[#2b2d42] h-56 z-10 absolute inset-x-0 top-0'></div>
			<div className='relative z-30 flex justify-between my-10 md:mx-10 lg:mx-16 h-11 navbar'>
				{/* Logo */}
				<div className='flex justify-center w-full anichartLogo'>
					<Link href='/'>
						<a>
							<Image
								src='/anichartLogo.svg'
								alt='AnichartLogo'
								width='45px'
								height='45px'
							/>
						</a>
					</Link>
				</div>

				<div className='flex justify-center w-full text-center seasons'>
					<NavLinkMD
						link={`/WINTER-${season.WINTER.year}`}
						text='Winter'
						path={currentLocation.split('-')[0]}
						pathMatch='WINTER'
						year={season.WINTER.year}
					/>
					<NavLinkMD
						link={`/SPRING-${season.SPRING.year}`}
						text='Spring'
						path={currentLocation.split('-')[0]}
						pathMatch='SPRING'
						year={season.SPRING.year}
					/>
					<NavLinkMD
						link={`/SUMMER-${season.SUMMER.year}`}
						text='Summer'
						path={currentLocation.split('-')[0]}
						pathMatch='SUMMER'
						year={season.SUMMER.year}
					/>
					<NavLinkMD
						link={`/FALL-${season.FALL.year}`}
						text='Fall'
						path={currentLocation.split('-')[0]}
						pathMatch='FALL'
						year={season.FALL.year}
					/>
				</div>

				{/* Charts */}
				<div className='flex justify-center w-full text-center charts'>
					<NavLinkMD
						link={`/airing`}
						icon='calendarIcon'
						text='Airing'
						path={currentPath}
						pathMatch='airing'
					/>
					<NavLinkMD
						link={`/archive`}
						icon='archiveIcon'
						text='Archive'
						path={currentPath}
						pathMatch='archive'
					/>
					<NavLinkMD
						link={`/tba`}
						icon='chevronIcon'
						text='TBA'
						path={currentPath}
						pathMatch='tba'
					/>
					<NavLinkMD
						link={`/settings`}
						icon='cogIcon'
						text='Settings'
						path={currentPath}
						pathMatch='settings'
					/>
				</div>
			</div>
		</div>
	);
}

export default NavbarMD;
