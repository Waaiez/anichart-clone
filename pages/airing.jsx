import { Navbar } from '../components';
import Head from 'next/head';

function airing() {
	return (
		<>
			<Head>
				<title>AniChart: Airing Anime Calendar</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</>
	);
}

export default airing;
