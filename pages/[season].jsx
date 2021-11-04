import { CameraIcon, SearchIcon, ShareIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TiArrowUnsorted } from 'react-icons/ti';

import { CardList, DataSection, Navbar, SearchBar } from '../components';
import { useData } from '../context/DataContext';
import { useStorage } from '../context/StorageContext';
import { getPreviousSeason } from '../lib/animeSeason';
import search from './api/anilist-api/queries/season';

function Season() {
	const router = useRouter();

	const [fullSeason, setFullSeason] = useState('');

	const { getItem, setItem } = useStorage();
	const {
		dataTV,
		dataTV_Short,
		dataMovie,
		dataLeftovers,
		dataOther,
		getData,
	} = useData();

	const storedLanguage = getItem('language');
	const storedSortOption = getItem('sortOption');

	useEffect(() => {
		let allowedUrls = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];
		console.log('route1', router.query.season);
		router.query.season !== undefined &&
			(new RegExp(allowedUrls.join('|')).test(router.query.season)
				? setFullSeason(router.query.season)
				: router.push('/'));
	}, [router]);

	useEffect(() => {
		fullSeason && getData(fullSeason, storedSortOption);
	}, [fullSeason, storedSortOption]);

	return (
		<>
			<Head>
				<title>
					AniChart (Unofficial): {fullSeason} Seasonal Chart
				</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main className='flex justify-center w-full main-content '>
				<div className='relative z-20 flex flex-col items-center w-11/12 h-full mb-16 chart-view md:w-8/12 lg:w-11/12 xl:w-10/12 2xl:w-11/12'>
					{/* Search bar on small screens */}
					<SearchBar />

					<section className='w-full'>
						<div className='flex justify-between w-full mb-5'>
							<div className='flex justify-start w-full text-2xl font-bold md:text-white text-theme-base'>
								TV
							</div>
							<div className='justify-end hidden md:flex'>
								<ShareIcon className='w-6 h-6 mx-2 text-gray-400' />
								<CameraIcon className='w-6 h-6 mx-2 text-gray-400' />
								<SearchIcon className='w-6 h-6 mx-2 text-gray-400' />
								<TiArrowUnsorted className='w-6 h-6 mx-2 text-gray-400' />
							</div>
						</div>
						<CardList data={dataTV} skeletonCardNum={6} />
					</section>

					<DataSection
						name='TV SHORT'
						data={dataTV_Short}
						skeletonCardNum='3'
					/>

					<DataSection
						name='LEFTOVERS'
						data={dataLeftovers}
						skeletonCardNum='1'
					/>

					<DataSection
						name='Movie'
						data={dataMovie}
						skeletonCardNum='1'
					/>

					<DataSection
						name='OVA / ONA / SPECIAL'
						data={dataOther}
						skeletonCardNum='1'
					/>
				</div>
			</main>
		</>
	);
}

export default Season;
