import Head from 'next/head';
import { Navbar } from '../components';

function airing() {
	return (
		<>
			<Head>
				<title>AniChart (Unofficial): Airing Anime Calendar</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</>
	);
}

export default airing;
