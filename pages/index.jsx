import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { LoadingIcon } from '../components';
import Head from 'next/head';
import { animeSeason } from '../lib/animeSeason';

export default function Home() {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const { currentSeason, currentSeasonYear } = animeSeason();
		setIsLoading(false);

		if (isLoading === false)
			router.push(`${currentSeason}-${currentSeasonYear}`);
	}, [isLoading, router]);

	return (
		<>
			<Head>
				<title>AniChart (Unofficial): Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex items-center justify-center h-screen'>
				{isLoading && <LoadingIcon width='100' height='100' />}
			</div>
		</>
	);
}
