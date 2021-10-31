import Head from 'next/head';
import { Navbar } from '../components';

function archive() {
	return (
		<>
			<Head>
				<title>AniChart (Unofficial): Seasonal Anime Archive</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</>
	);
}

export default archive;
