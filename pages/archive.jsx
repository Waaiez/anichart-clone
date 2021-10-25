import { Navbar } from '../components';
import Head from 'next/head';

function archive() {
	return (
		<>
			<Head>
				<title>AniChart: Seasonal Anime Archive</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</>
	);
}

export default archive;
