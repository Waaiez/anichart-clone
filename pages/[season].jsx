import { Navbar, CardList } from '../components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ShareIcon, CameraIcon, SearchIcon } from '@heroicons/react/outline';
import { TiArrowUnsorted } from 'react-icons/ti';
import useInView from 'react-cool-inview';

function Season() {
	const router = useRouter();

	const [fullSeason, setFullSeason] = useState('');

	useEffect(() => {
		router.query.season && setFullSeason(router.query.season);
	});

	const { observe, inView } = useInView({
		onEnter: ({ unobserve }) => unobserve(), // only run once
	});

	return (
		<>
			<Head>
				<title>AniChart: {fullSeason} Seasonal Chart</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='main-content w-full flex justify-center bg-theme-primary'>
				<div className='chart-view flex flex-col items-center h-full mb-16 z-20 relative w-11/12 md:w-5/6 '>
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
							<div className=' justify-end hidden md:flex'>
								<ShareIcon className='h-6 w-6 text-gray-400 mx-2' />
								<CameraIcon className='h-6 w-6 text-gray-400 mx-2' />
								<SearchIcon className='h-6 w-6 text-gray-400 mx-2' />
								<TiArrowUnsorted className='h-6 w-6 text-gray-400 mx-2' />
							</div>
						</div>
						<CardList />
					</section>
					<section className='w-full' ref={observe}>
						{inView && (
							<>
								<div className='w-full flex justify-start text-2xl font-bold my-5 text-theme-base'>
									TV SHORT
								</div>
								<CardList />
							</>
						)}
					</section>
					<section className='w-full' ref={observe}>
						{inView && (
							<>
								<div className='w-full flex justify-start text-2xl font-bold my-5 text-theme-base'>
									LEFTOVERS
								</div>
								<CardList />
							</>
						)}
					</section>
					<section className='w-full' ref={observe}>
						{inView && (
							<>
								<div className='w-full flex justify-start text-2xl font-bold my-5 text-theme-base'>
									MOVIE
								</div>
								<CardList />
							</>
						)}
					</section>
					<section className='w-full' ref={observe}>
						{inView && (
							<>
								<div className='w-full flex justify-start text-2xl font-bold my-5 text-theme-base'>
									OVA / ONA / SPECIAL
								</div>
								<CardList />
							</>
						)}
					</section>
				</div>
			</div>
		</>
	);
}

export default Season;
