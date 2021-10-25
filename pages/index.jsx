import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { LoadingIcon } from '../components';
import Head from 'next/head';

function getCurrentSeason() {
	let d = new Date();
	let season = d.getMonth() + 1;
	[10, 7, 4, 1].every((val) => {
		if (season >= val) {
			season = val;
			return false;
		}
		return true;
	});
	if (season == 1) return { seasonYear: d.getFullYear(), season: 'WINTER' };
	if (season == 4) return { seasonYear: d.getFullYear(), season: 'SPRING' };
	if (season == 7) return { seasonYear: d.getFullYear(), season: 'SUMMER' };
	if (season == 10) return { seasonYear: d.getFullYear(), season: 'FALL' };
}

export default function Home() {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const { seasonYear, season } = getCurrentSeason();
		setIsLoading(false);

		if (isLoading === false) router.push(`${season}-${seasonYear}`);
	});

	return (
		<>
			<Head>
				<title>AniChart: Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex items-center justify-center h-screen'>
				{isLoading && <LoadingIcon width='100' height='100' />}
			</div>
		</>
	);
}
