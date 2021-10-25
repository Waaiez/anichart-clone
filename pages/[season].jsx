import { Navbar } from '../components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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
		</>
	);
}

export default Season;
