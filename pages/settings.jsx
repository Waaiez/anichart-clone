import { Navbar } from '../components';
import Head from 'next/head';

function settings() {
	return (
		<>
			<Head>
				<title>AniChart: Settings</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</>
	);
}

export default settings;
