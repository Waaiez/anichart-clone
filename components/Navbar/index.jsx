import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import {
	MenuIcon,
	CalendarIcon,
	ArchiveIcon,
	ChevronDoubleRightIcon,
	CogIcon,
} from '@heroicons/react/outline';
import { FaRegSnowflake, FaSeedling, FaSun, FaLeaf } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function getSeason() {
	let d = new Date();
	let season = d.getMonth() + 1;
	[10, 7, 4, 1].every((val) => {
		if (season >= val) {
			season = val;
			return false;
		}
		return true;
	});
	if (season > 4) {
		return d.getFullYear() + 1;
	} else return d.getFullYear();
}

export default function Navbar() {
	const [isShowing, setIsShowing] = useState(false);

	const router = useRouter();

	const [fullSeason, setFullSeason] = useState('');
	const [path, setPath] = useState('');

	useEffect(() => {
		router.query.season && setFullSeason(router.query.season);
		setPath(router.pathname.split('/')[1]);
	});

	return (
		<>
			{/* SM Navbar */}
			<div className='md:hidden fixed inset-x-0 bottom-0 pt-8 pb-5 px-5 flex justify-items-start shadow-2xl sm-nav-wrap z-50 select-none '>
				{/* Menu 1 - seasons */}
				{!isShowing && (
					<div className='bg-[#2b2d42] h-14 w-full z-100 rounded-md mr-5 flex justify-evenly shadow-2xl sm-seasons'>
						<Link href={`/WINTER-${getSeason()}`}>
							<a className='group'>
								<div
									className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
										fullSeason.split('-')[0] === 'WINTER'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<FaRegSnowflake className='h-5 w-5 flex mx-auto' />
									<div className='text-xs text-center'>
										Winter
									</div>
								</div>
							</a>
						</Link>
						<Link href={`/SPRING-${getSeason()}`}>
							<a className='group'>
								<div
									className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
										fullSeason.split('-')[0] === 'SPRING'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<FaSeedling className='h-5 w-5 flex mx-auto' />
									<div className='text-xs text-center'>
										Spring
									</div>
								</div>
							</a>
						</Link>
						<Link href={`/SUMMER-${new Date().getFullYear()}`}>
							<a className='group'>
								<div
									className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
										fullSeason.split('-')[0] === 'SUMMER'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<FaSun className='h-5 w-5 flex mx-auto' />
									<div className='text-xs text-center'>
										Summer
									</div>
								</div>
							</a>
						</Link>
						<Link href={`/FALL-${new Date().getFullYear()}`}>
							<a className='group'>
								<div
									className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
										fullSeason.split('-')[0] === 'FALL'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<FaLeaf className='h-5 w-5 flex mx-auto' />
									<div className='text-xs text-center'>
										Fall
									</div>
								</div>
							</a>
						</Link>
					</div>
				)}
				{/* Menu 2 - charts */}
				{isShowing && (
					<div className='bg-[#2b2d42] h-14 w-full z-10 rounded-md mr-5 flex justify-evenly shadow-2xl sm-charts z-50'>
						<Link href='/archive'>
							<a className='group'>
								<div
									className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
										path === 'archive'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<ArchiveIcon className='h-5 w-5 flex mx-auto' />
									<div className='text-xs text-center'>
										Archive
									</div>
								</div>
							</a>
						</Link>
						<Link href='/tba'>
							<a className='group'>
								<div
									className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
										path === 'tba'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<ChevronDoubleRightIcon className='h-5 w-5 flex mx-auto' />
									<div className='text-xs text-center'>
										TBA
									</div>
								</div>
							</a>
						</Link>
						<Link href='/airing'>
							<a className='group'>
								<div
									className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
										path === 'airing'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<CalendarIcon className='h-5 w-5 flex mx-auto' />
									<div className='text-xs text-center'>
										Airing
									</div>
								</div>
							</a>
						</Link>
						<Link href='/settings'>
							<a className='group'>
								<div
									className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
										path === 'settings'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<CogIcon className='h-5 w-5 flex mx-auto' />
									<div className='text-xs text-center'>
										Settings
									</div>
								</div>
							</a>
						</Link>
					</div>
				)}

				{/* Menu Icon */}
				<Switch checked={isShowing} onChange={setIsShowing}>
					<div className='bg-[#2b2d42] h-14 w-16 z-100 rounded-md flex items-center justify-center shadow-2xl sm-menu z-50'>
						<MenuIcon className='text-white h-10' />
					</div>
				</Switch>
			</div>

			{/* MD and above Navbar */}
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
						<Link href={`/WINTER-${getSeason()}`}>
							<a className='group'>
								<div
									className={`text-base font-bold w-full px-5 group-hover:text-gray-200 transition duration-300 ease-in-out ${
										fullSeason.split('-')[0] === 'WINTER'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									Winter
								</div>
								<div className='text-xs w-full px-5 text-gray-400'>
									{getSeason()}
								</div>
							</a>
						</Link>
						<Link href={`/SPRING-${getSeason()}`}>
							<a className='group'>
								<div
									className={`text-base font-bold w-full px-5 group-hover:text-gray-200 transition duration-300 ease-in-out ${
										fullSeason.split('-')[0] === 'SPRING'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									Spring
								</div>
								<div className='text-xs w-full px-5 text-gray-400'>
									{getSeason()}
								</div>
							</a>
						</Link>
						<Link href={`/SUMMER-${new Date().getFullYear()}`}>
							<a className='group'>
								<div
									className={`text-base font-bold w-full px-5 group-hover:text-gray-200 transition duration-300 ease-in-out ${
										fullSeason.split('-')[0] === 'SUMMER'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									Summer
								</div>
								<div className='text-xs w-full px-5 text-gray-400'>
									{new Date().getFullYear()}
								</div>
							</a>
						</Link>
						<Link href={`/FALL-${new Date().getFullYear()}`}>
							<a className='group'>
								<div
									className={`text-base font-bold w-full px-5 group-hover:text-gray-200 transition duration-300 ease-in-out ${
										fullSeason.split('-')[0] === 'FALL'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									Fall
								</div>
								<div className='text-xs w-full px-5 text-gray-400'>
									{new Date().getFullYear()}
								</div>
							</a>
						</Link>
					</div>

					{/* Charts */}
					<div className='w-full flex charts text-center justify-center'>
						<Link href='/airing'>
							<a className='group'>
								<div
									className={`text-base font-bold w-full px-2 group-hover:text-gray-200 transition duration-300 ease-in-out ${
										path === 'airing'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<CalendarIcon className='h-6 w-5 flex mx-auto' />
								</div>
								<div className='text-sm w-full px-2 text-gray-400'>
									Airing
								</div>
							</a>
						</Link>
						<Link href='/archive'>
							<a className='group'>
								<div
									className={`text-base font-bold w-full px-2 group-hover:text-gray-200 transition duration-300 ease-in-out ${
										path === 'archive'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<ArchiveIcon className='h-6 w-5 flex mx-auto' />
								</div>
								<div className='text-sm w-full px-2 text-gray-400'>
									Archive
								</div>
							</a>
						</Link>
						<Link href='/tba'>
							<a className='group'>
								<div
									className={`text-base font-bold w-full px-2 group-hover:text-gray-200 transition duration-300 ease-in-out ${
										path === 'tba'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<ChevronDoubleRightIcon className='h-6 w-5 flex mx-auto' />
								</div>
								<div className='text-sm w-full px-2 text-gray-400'>
									TBA
								</div>
							</a>
						</Link>
						<Link href='/settings'>
							<a className='group'>
								<div
									className={`text-base font-bold w-full px-2 group-hover:text-gray-200 transition duration-300 ease-in-out ${
										path === 'settings'
											? 'text-gray-100'
											: 'text-gray-400'
									}`}
								>
									<CogIcon className='h-6 w-5 flex mx-auto' />
								</div>
								<div className='text-sm w-full px-2 text-gray-400'>
									Settings
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
