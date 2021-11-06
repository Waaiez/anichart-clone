import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { DataSection, ErrorAlert, Navbar, SearchBar } from '../components';
import { useData } from '../context/DataContext';
import { useStorage } from '../context/StorageContext';

function Season() {
	const router = useRouter();

	const [fullSeason, setFullSeason] = useState('');

	const { getItem } = useStorage();
	const {
		dataTV,
		dataTV_Short,
		dataMovie,
		dataLeftovers,
		dataOther,
		getData,
		error,
	} = useData();

	const storedSortOption = getItem('sortOption');

	useEffect(() => {
		let allowedUrls = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];
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

			{/* Includes Navbar for <SM and smaller> and <MD and bigger> screens */}
			<Navbar />

			<main className='flex justify-center w-full main-content '>
				<div className='relative z-20 flex flex-col items-center w-11/12 h-full mb-16 chart-view md:w-8/12 lg:w-11/12 xl:w-10/12 2xl:w-11/12'>
					{/* Search bar on <SM and smaller> screens */}
					<SearchBar />

					<DataSection name='TV' data={dataTV} skeletonCardNum={6} />

					<DataSection
						name='TV SHORT'
						data={dataTV_Short}
						skeletonCardNum={3}
					/>

					<DataSection
						name='LEFTOVERS'
						data={dataLeftovers}
						skeletonCardNum={1}
					/>

					<DataSection
						name='Movie'
						data={dataMovie}
						skeletonCardNum={1}
					/>

					<DataSection
						name='OVA / ONA / SPECIAL'
						data={dataOther}
						skeletonCardNum={1}
					/>
				</div>
			</main>

			{error && <ErrorAlert error={error} />}
		</>
	);
}

export default Season;
