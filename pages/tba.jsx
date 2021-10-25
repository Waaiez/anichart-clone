import { Navbar } from '../components';
import Head from 'next/head';

function tba() {
	return (
		<>
			<Head>
				<title>AniChart: TBA Anime Chart</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</>
	);
}

export default tba;
