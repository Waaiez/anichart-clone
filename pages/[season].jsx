import { Navbar } from '../components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ShareIcon, CameraIcon, SearchIcon } from '@heroicons/react/outline';
import { TiArrowUnsorted } from 'react-icons/ti';

function Season() {
	const router = useRouter();

	const [fullSeason, setFullSeason] = useState('');

	useEffect(() => {
		router.query.season && setFullSeason(router.query.season);
	});

	return (
		<>
			<Head>
				<title>AniChart: {fullSeason} Seasonal Chart</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='main-content h-screen w-full flex justify-center bg-theme-primary'>
				<div className='chart-view flex flex-col items-center h-screen mb-16 z-20 relative w-11/12 md:w-3/5 '>
					{/* Search bar on small screens */}
					<div className='flex text-gray-600 md:hidden w-full mt-3 mb-7'>
						<input
							type='search'
							name='serch'
							placeholder='Filter Anime'
							className='bg-theme-secondary h-10 px-5 rounded-md text-sm focus:outline-none w-full'
						/>
						<div className='w-10 flex items-center justify-center'>
							<TiArrowUnsorted className='h-5 w-6 text-gray-400' />
						</div>
					</div>

					<section className='w-full'>
						<div className='flex justify-between w-full mb-5'>
							<div className='w-full flex justify-start md:text-white text-2xl font-bold text-theme-base'>
								TV
							</div>
							<div className='w-full justify-end hidden md:flex'>
								<ShareIcon className='h-6 w-6 text-gray-400 mx-2' />
								<CameraIcon className='h-6 w-6 text-gray-400 mx-2' />
								<SearchIcon className='h-6 w-6 text-gray-400 mx-2' />
								<TiArrowUnsorted className='h-6 w-6 text-gray-400 mx-2' />
							</div>
						</div>
					</section>
					<section className='w-full'>
						<div className='w-full flex justify-start text-2xl font-bold my-5 text-theme-base'>
							TV SHORT
						</div>
					</section>
					<section className='w-full'>
						<div className='w-full flex justify-start text-2xl font-bold my-5 text-theme-base'>
							LEFTOVERS
						</div>
					</section>
					<section className='w-full'>
						<div className='w-full flex justify-start text-2xl font-bold my-5 text-theme-base'>
							MOVIE
						</div>
					</section>
					<section className='w-full'>
						<div className='w-full flex justify-start text-2xl font-bold my-5 text-theme-base'>
							OVA / ONA / SPECIAL
						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default Season;
