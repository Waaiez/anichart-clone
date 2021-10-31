import Head from 'next/head';
import { Navbar } from '../components';

function tba() {
	return (
		<>
			<Head>
				<title>AniChart (Unofficial): TBA Anime Chart</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</>
	);
}

export default tba;
