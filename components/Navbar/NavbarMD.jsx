import {
	CalendarIcon,
	ArchiveIcon,
	ChevronDoubleRightIcon,
	CogIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import NavLinkMD from './NavLinkMD';

function NavbarMD({ seasonYear, currentYear, currentSeason, currentPath }) {
	return (
		<div className='hidden md:block select-none '>
			{/* Backround behind Navbar */}
			<div className='bg-[#2b2d42] h-56 z-10 absolute inset-x-0 top-0'></div>
			<div className='flex justify-between md:mx-10 lg:mx-16 my-10 h-11 navbar z-30 relative'>
				{/* Logo */}
				<div className='w-full flex justify-center anichartLogo'>
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

				<div className='w-full flex seasons text-center justify-center'>
					<NavLinkMD
						link={`/WINTER-${seasonYear}`}
						text='Winter'
						path={currentSeason.split('-')[0]}
						pathMatch='WINTER'
						year={seasonYear}
					/>
					<NavLinkMD
						link={`/SPRING-${seasonYear}`}
						text='Spring'
						path={currentSeason.split('-')[0]}
						pathMatch='SPRING'
						year={seasonYear}
					/>
					<NavLinkMD
						link={`/SUMMER-${currentYear}`}
						text='Summer'
						path={currentSeason.split('-')[0]}
						pathMatch='SUMMER'
						year={currentYear}
					/>
					<NavLinkMD
						link={`/FALL-${currentYear}`}
						text='Fall'
						path={currentSeason.split('-')[0]}
						pathMatch='FALL'
						year={currentYear}
					/>
				</div>

				{/* Charts */}
				<div className='w-full flex charts text-center justify-center'>
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
